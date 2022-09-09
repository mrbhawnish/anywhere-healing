#!/bin/sh
npm install --ignore-scripts --silent
npm run migrations
npm run seeds
npm run local