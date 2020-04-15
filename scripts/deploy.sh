#!/bin/bash

DEPLOYMENT=$(npx now ls --all personal-site)

ID=$(node scripts/get-name.js $DEPLOYMENT)

npx now alias set $ID felipeacosta.now.sh
