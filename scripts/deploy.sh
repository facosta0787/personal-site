#!/bin/bash

PROD_URL="felipeacosta.now.sh"

DEPLOYMENTS="$(npx now ls --all personal-site)" &&
CURRENT_DEPLOYMENT="$(node scripts/get-name.js ${DEPLOYMENTS})" &&

NEW_ID="$(npx now --prod --force)" &&
npx now alias set ${ID} ${PROD_URL} &&
npx now rm --yes ${CURRENT_DEPLOYMENT}

