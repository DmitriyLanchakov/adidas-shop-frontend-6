#!/usr/bin/env bash
yarn add flow-typed --peer
./node_modules/.bin/flow-typed install styled-components@1.4
./node_modules/.bin/flow ./src
