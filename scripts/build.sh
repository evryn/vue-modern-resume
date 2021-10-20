#!/bin/bash
npm install -g yarn
yarn install
yarn build
serve -s dist -l 80

