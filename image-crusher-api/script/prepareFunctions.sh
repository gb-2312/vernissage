#!/bin/bash

rm -r dist || echo 1

mkdir -p dist

# build get function
mkdir dist/get
cp -r lib/* dist/get/
cp -r node_modules dist/get/node_modules
cp package.json dist/get/package.json
echo "exports.run = function(data,res){var err;require('./get').run().catch(function(x){err=x}).then(function(x){res.send(err?err.toString():x)})}" >> dist/get/index.js

# build create function
mkdir dist/create
cp -r lib/* dist/create/
cp -r node_modules dist/create/node_modules
cp package.json dist/create/package.json
echo "exports.run = function(data,res){var err;require('./create').run().catch(function(x){err=x}).then(function(x){res.send(err?err.toString():x)})}" >> dist/create/index.js