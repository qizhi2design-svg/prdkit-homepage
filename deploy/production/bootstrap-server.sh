#!/usr/bin/env sh
set -eu

APP_DIR="${APP_DIR:-/opt/prdkit-homepage}"

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker is required. Install Docker Engine on the server first." >&2
  exit 1
fi

if ! docker compose version >/dev/null 2>&1; then
  echo "Docker Compose plugin is required. Install docker compose before deploying." >&2
  exit 1
fi

mkdir -p "$APP_DIR"

if command -v nginx >/dev/null 2>&1; then
  nginx -t
fi

echo "Bootstrap complete: $APP_DIR"
