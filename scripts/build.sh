#!/bin/bash
npm install -g yarn
yarn install
yarn build
serve -s build -l 80

