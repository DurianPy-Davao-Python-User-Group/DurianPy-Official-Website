<!-- intent-skills:start -->
## Skill Loading

Before editing files for a substantial task:
- Run `pnpm dlx @tanstack/intent@latest list` from the workspace root to see available local skills.
- If a listed skill matches the task, run `pnpm dlx @tanstack/intent@latest load <package>#<skill>` before changing files.
- Use the loaded `SKILL.md` guidance while making the change.
- Monorepos: when working across packages, run the skill check from the workspace root and prefer the local skill for the package being changed.
- Multiple matches: prefer the most specific local skill for the package or concern you are changing; load additional skills only when the task spans multiple packages or concerns.
<!-- intent-skills:end -->

---

# Project Context — durianpy-website-tanstack

## Scaffolding Provenance

```bash
# TanStack CLI command used to bootstrap this project (2026-07-11)
npx @tanstack/cli@latest create durianpy-website-tanstack \
  --framework React \
  --package-manager pnpm \
  --intent \
  --no-examples \
  --non-interactive \
  --no-git \
  --target-dir /Users/seangaaab/Dev/durianpy/durianpy-website-tanstack

# CLI version at time of scaffolding: @tanstack/cli@0.69.5

# Follow-up TanStack Intent commands
npx @tanstack/intent@latest install   # @tanstack/intent@0.3.5
npx @tanstack/intent@latest list
```

> **Note:** The `--tailwind` flag was passed but is deprecated — Tailwind CSS v4 is always enabled in current TanStack Start scaffolds. The `--agent` flag does not exist; `--intent` was used instead to wire up TanStack Intent skill mappings.

## Chosen Stack & Integrations

| Choice           | Value                                 |
|------------------|---------------------------------------|
| Framework        | React 19                              |
| Meta-framework   | TanStack Start (full-stack SSR)       |
| Router           | TanStack Router (file-based routing)  |
| Styling          | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Bundler          | Vite 8                                |
| TypeScript       | v6 (strict mode)                      |
| Testing          | Vitest + Testing Library              |
| Package manager  | pnpm                                  |
| Toolchain        | Default (no Biome/ESLint added)       |
| Starter          | Blank (no examples)                   |
| Add-ons          | None                                  |
| Deployment       | Not yet configured (nitro default)    |

## Environment Variables

This blank scaffold does not require any environment variables. When you add integrations:

- **Client-exposed variables** must be prefixed with `VITE_` (e.g. `VITE_API_URL`).
- **Server-only variables** use plain `process.env.SECRET_KEY` — accessible only inside `createServerFn` / middleware / server routes.
- Store variables in a `.env` file at the project root (gitignored by default).

## Key Architecture Decisions

1. **File-based routing** — Routes live in `src/routes/`. The route tree is auto-generated into `src/routeTree.gen.ts`. Do not edit that file manually.
2. **`getRouter()` factory pattern** — Defined in `src/router.tsx`. Both client and server entry points call this to create the router instance.
3. **Root document shell** — `src/routes/__root.tsx` defines the HTML document skeleton via `shellComponent`. The `<HeadContent />` and `<Scripts />` components are required.
4. **Path aliases** — `#/*` and `@/*` both resolve to `./src/*` (configured in both `tsconfig.json` and `package.json` imports).
5. **Devtools** — TanStack Devtools + Router Devtools are included in dev mode. The Vite plugin (`@tanstack/devtools-vite`) automatically strips devtools code from production builds.

## Known Gotchas

- The `devtools()` plugin in `vite.config.ts` **must** be the first plugin in the array.
- `routeTree.gen.ts` is regenerated on `pnpm dev` and `pnpm generate-routes`. Never edit it by hand.
- Tailwind v4 uses `@import "tailwindcss"` syntax (not `@tailwind` directives).
- The `latest` tag on TanStack packages pins to the current release train. Lock versions before deploying to production.

## Deployment Notes

No deployment adapter is configured yet. When ready, choose one:

```bash
# Example: add Cloudflare adapter
npx @tanstack/cli@latest add deployment-cloudflare
```

Or configure directly in `vite.config.ts` via the `tanstackStart()` plugin options.

Available targets: Cloudflare Workers, Netlify, Vercel, Node.js/Docker, Bun, Railway.

Load the deployment skill before configuring:
```bash
pnpm dlx @tanstack/intent@latest load @tanstack/start-client-core#start-core/deployment
```

## Next Steps

- [ ] Initialize git: `git init && git add . && git commit -m "initial scaffold"`
- [ ] Configure deployment adapter for target platform
- [ ] Add application routes under `src/routes/`
- [ ] Set up environment variables as integrations are added
- [ ] Consider adding add-ons: `npx @tanstack/cli@latest create --list-add-ons`
