#!/usr/bin/env bash
set -e

# Cleanup
echo 'Cleanup...'
rm -rf dist

echo 'Compile JS...'
rollup -c scripts/rollup.config.js --environment BUILD:production
echo 'Done.'
echo ''

echo 'Compile CSS Reset...'
node-sass --output-style expanded --precision 6 src/styles/ -o dist/

echo 'Done.'
echo ''
