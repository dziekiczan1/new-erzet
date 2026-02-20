#!/bin/sh
set -e

echo "Loading secrets from Infisical..."

export INFISICAL_MACHINE_CLIENT_ID=$(cat /run/secrets/infisical_client_id 2>/dev/null || echo "")
export INFISICAL_MACHINE_CLIENT_SECRET=$(cat /run/secrets/infisical_secret 2>/dev/null || echo "")

if [ -z "$INFISICAL_MACHINE_CLIENT_ID" ] || [ -z "$INFISICAL_MACHINE_CLIENT_SECRET" ]; then
  echo "Błąd: Brakuje INFISICAL_MACHINE_CLIENT_ID lub INFISICAL_MACHINE_CLIENT_SECRET w /run/secrets"
  echo "Zawartość /run/secrets:"
  ls -l /run/secrets/ 2>/dev/null || echo "(katalog niedostępny)"
  exit 1
fi

echo "Logging in to Infisical..."

export INFISICAL_TOKEN=$(infisical login \
  --method=universal-auth \
  --client-id="$INFISICAL_MACHINE_CLIENT_ID" \
  --client-secret="$INFISICAL_MACHINE_CLIENT_SECRET" \
  --plain --silent)

echo "Successfully logged in to Infisical. Starting the application..."

exec infisical run \
  --token "$INFISICAL_TOKEN" \
  --projectId "new-e-r-zet-0q-vd" \
  --env "prod" \
  --domain "https://secrets.erzet.dev" \
  -- node server.js
