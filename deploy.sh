#!/bin/bash

set -e

rm -rf build || exit 1

gulp

cd build
git init

git config user.name "Travis CI"
git config user.email "hello@leungenterprises.com"

git add .
git commit -m "Github pages deploy"


git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
