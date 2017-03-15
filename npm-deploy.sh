#!/bin/sh
set -xue
mvn prepare-package
cat ./target/classes/stjs.js ./src/main/js/ns.js ./target/classes/react-toolbox-bridge.js ./src/main/js/export.js > ./react-toolbox-bridge.js
npm publish

