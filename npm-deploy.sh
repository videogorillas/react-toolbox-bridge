#!/bin/sh
set -xue
cat ./target/classes/stjs.js ./target/classes/react-toolbox-bridge.js > ./react-toolbox-bridge.js
npm publish

