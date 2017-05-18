# frontend-shop [![Build Status](https://travis-ci.org/stk-dmitry/adidas-shop-frontend.svg?branch=master)](https://travis-ci.org/stk-dmitry/adidas-shop-frontend)

# Install
```sh
$ npm install
$ npm run start
```

## Tests
```sh
$ npm install
$ npm run lint # eslint by airbnb config
$ npm run test # jsdom watch mode ( a | q )
$ npm run flow:build
```

## Prepush
```sh
$ npm run prepush
# run lint && flow:build && npm run deploy
# deploy url wiry-cast.surge.sh
```

### FLow
[flow-typed](https://github.com/flowtype/flow-typed/tree/master/definitions/npm)
```sh
$ npm install -g flow-typed
$ npm run flow:build
$ flow-typed install styled-components@1.4
# flow-typed install <Name>@<version>
```

### Dependencies
- [react-flexbox-grid](https://github.com/roylee0704/react-flexbox-grid)
- [styled-components](https://github.com/styled-components/styled-components)
- [react router v4](https://reacttraining.com/react-router/web/api/)
- [flow type](https://github.com/flowtype/flow-typed)
- eslint ([airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))
