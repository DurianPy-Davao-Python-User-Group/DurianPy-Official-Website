#!/usr/bin/env bash
set -euo pipefail
# Resolve to project root regardless of where the script is invoked from
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
ENV_FILE="$ROOT_DIR/.env"

# Load .env into this shell's environment
if [ -f "$ENV_FILE" ]; then
  set -a          # auto-export every var sourced below
  # shellcheck disable=SC1090
  source <(sed 's/\r$//' "$ENV_FILE")   # strip CRLF defensively
  set +a
else
  echo "⚠️  No .env file found at $ENV_FILE"
fi

WEBSITE_URL="${NEXT_PUBLIC_CMS_URL%/}"
OUTPUT_DIR="$ROOT_DIR/types"
OUTPUT_FILE="$OUTPUT_DIR/payload-types.ts"
ENDPOINT="$WEBSITE_URL$TYPE_SYNC_ENDPOINT"
echo "$ENDPOINT"

mkdir -p "$OUTPUT_DIR"

# curl -sf -o "$OUTPUT_FILE" "$ENDPOINT"
curl --request GET \
  --url "$ENDPOINT" \
  --header 'content-type: application/json' \
  --data '{}' >> "$OUTPUT_FILE"

echo "✅ Types synced to $OUTPUT_FILE"