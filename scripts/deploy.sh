#!/bin/bash

PROD_URL="felipedev.tk"

DEPLOYMENTS="$(npx vercel ls personal-site)" &&
CURRENT_DEPLOYMENT="$(node scripts/get-name.js ${DEPLOYMENTS})" &&

NEW_ID="$(npx vercel --prod --force)" &&
# npx vercel alias set ${ID} ${PROD_URL} &&
npx vercel rm --yes ${CURRENT_DEPLOYMENT}

