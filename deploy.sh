#!/bin/bash

echo "Running deployment script..."

CURRENT_COMMIT=`git rev-parse HEAD`

npm install typescript@1.8.10 -g

echo "Cloning gh-pages branch..."

git clone -b gh-pages "https://${GH_TOKEN}@${GH_REF}" out > /dev/null 2>&1 || exit 1

rm -r out/*

echo "Compiling TSC"

tsc --sourcemap "./game/game.ts" --out "./game/game.js"

echo "Copying built files"
cp -R $(ls | grep -v '^\(out\|Excalibur\)$') out
cd out

echo "Setting commit number ${CURRENT_COMMIT}"
sed -i "s/COMMIT_NUMBER/${CURRENT_COMMIT}/g" ./index.html

echo "Committing and pushing to GH"

git config user.name "agrgic16"
git config user.email "ante16@gmail.com"
git add -A
git commit --allow-empty -m "Deploying game for $CURRENT_COMMIT" || exit 1
git push origin gh-pages > /dev/null 2>&1 || exit 1

echo "Pushed deployment successfully"
exit 0