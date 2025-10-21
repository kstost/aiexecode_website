#!/usr/bin/env bash
set -euo pipefail

# 간단한 Vite 빌드 스크립트
# 사용법: ./build.sh [--no-install]
# --no-install: npm install 단계를 생략합니다.

NO_INSTALL=0
if [[ "${1:-}" == "--no-install" ]]; then
  NO_INSTALL=1
fi

if [[ "$NO_INSTALL" -ne 1 ]]; then
  echo "==> Installing dependencies..."
  npm install
fi

# Tailwind CLI가 설치되어 있으면 한 번만 빌드합니다.
if npx --no-install tailwindcss --version >/dev/null 2>&1; then
  echo "==> Building Tailwind CSS..."
  npx tailwindcss -i ./src/styles.css -o ./src/tailwind-output.css
else
  echo "==> tailwindcss CLI not found via npx --no-install; skipping Tailwind build."
fi

echo "==> Running Vite build (npm run build)..."
npm run build

echo "==> Build finished. Output: ./dist"
