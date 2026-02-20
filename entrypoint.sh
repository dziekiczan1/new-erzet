#!/bin/sh
set -e

echo "Downloading secrets from Infisical..."

export INFISICAL_TOKEN="$INFISICAL_SERVICE_TOKEN"

eval $(infisical export \
  --env=prod \
  --project-slug=new-e-r-zet-0q-vd \
  --token="$INFISICAL_TOKEN" \
  --format=dotenv \
  | grep -v '^#' \
  | sed 's/^/export /')

echo "Secrets downloaded and environment variables set. Starting the server..."

exec node server.js
