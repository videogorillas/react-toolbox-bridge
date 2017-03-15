#!/bin/sh
set -xue
mvn prepare-package
cat ./target/classes/stjs.js ./target/classes/react-toolbox-bridge.js > ./react-toolbox-bridge.js
npm publish

