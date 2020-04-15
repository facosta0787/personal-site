#!/bin/bash
npm run export &&
touch out/.nojekyll &&
cp CNAME out/CNAME &&
git subtree split --prefix out -b gh-pages &&
git push --force origin gh-pages:gh-pages &&
git branch -D gh-pages

#git subtree push --prefix out origin gh-pages
rm -rf out