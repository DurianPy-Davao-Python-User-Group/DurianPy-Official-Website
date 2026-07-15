# ─── Step 1: Lambda Layer Builder ─────────────────────────────────
# Fetches and unzips external layers if specified via build arguments
FROM alpine AS layer-builder
RUN apk add --no-cache curl unzip

ARG LAYER_URL
RUN if [ -z "$LAYER_URL" ]; then \
        echo "LAYER_URL build-arg not provided, creating empty fallback directory" && \
        mkdir -p /opt-layer/extensions; \
    else \
        curl "$LAYER_URL" --output layer.zip && \
        unzip layer.zip -d /opt-layer && \
        rm layer.zip; \
    fi

# ─── Step 2: Base Image ───────────────────────────────────────────
# Leverages a slim Alpine footprint and sets up the pnpm environment globally
FROM public.ecr.aws/docker/library/node:22-alpine AS base
RUN apk add --no-cache libc6-compat

# Install and activate pnpm via Corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# ─── Step 3: Dependencies Isolation ───────────────────────────────
# Installs and caches node_modules separately to optimize layer rebuilding
FROM base AS deps
WORKDIR /app

# Copy lockfiles, manifests, and workspace files required by pnpm v11
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
RUN pnpm install --frozen-lockfile

# ─── Step 4: Application Builder ──────────────────────────────────
# Pulls in cached modules, maps build-time secrets, and runs the Nitro bundler
FROM base AS builder
WORKDIR /app

# Mount dependencies from the previous stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production

# NOTE: If your TanStack app requires build-time secrets (like your Next.js project),
# you can uncomment and adapt the secret mounts below:
# RUN --mount=type=secret,id=database_url \
#     export DATABASE_URL=$(cat /run/secrets/database_url) && \
#     pnpm build

RUN pnpm build

# ─── Step 5: Final Lambda Runtime ─────────────────────────────────
# Standardized, secure runtime environment executing as a non-root user
FROM base AS runner
WORKDIR /app

# Copy the AWS Lambda Web Adapter extension
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:1.0.1 /lambda-adapter /opt/extensions/lambda-adapter

# Merge external layer extensions fetched in Step 1
COPY --from=layer-builder /opt-layer/extensions /opt/extensions
RUN chmod +x /opt/extensions/* 2>/dev/null || true

# Runtime Architecture Variables
ENV PORT=3000
ENV HOST=0.0.0.0
ENV NODE_ENV=production

# Lambda Runtime and Extension Configurations
ENV AWS_LWA_READINESS_CHECK_PORT=3000
ENV AWS_LWA_READINESS_CHECK_PATH=/
ENV AWS_LAMBDA_WEB_ADAPTER_PORT=3000
ENV PARAMETERS_SECRETS_EXTENSION_HTTP_PORT=2773
ENV SECRETS_MANAGER_TTL=300

# Secure non-root system identity mapping
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 tanstackjs

# Copy the standalone Nitro output with explicitly isolated ownership
COPY --from=builder --chown=tanstackjs:nodejs /app/.output/server ./.output/server

USER tanstackjs

EXPOSE 3000

# Execute the self-contained Nitro HTTP server
CMD ["node", ".output/server/index.mjs"]