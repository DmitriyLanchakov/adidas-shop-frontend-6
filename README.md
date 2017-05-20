# frontend-shop [![Build Status](https://travis-ci.org/stk-dmitry/adidas-shop-frontend.svg?branch=master)](https://travis-ci.org/stk-dmitry/adidas-shop-frontend)

# Install
```sh
$ yarn
$ yarn start
```

## Tests
```sh
$ yarn
$ yarn lint # eslint by airbnb config
$ yarn test # jsdom watch mode ( a | q )
$ yarn flow:build
```

## Prepush
```sh
$ yarn prepush
# run lint && flow:build && yarn deploy
# deploy url wiry-cast.surge.sh
```

### FLow
[flow-typed](https://github.com/flowtype/flow-typed/tree/master/definitions/yarn)
```sh
$ yarn add -g flow-typed
$ yarn flow:build
$ flow-typed install styled-components@1.4
# flow-typed install <Name>@<version>
```

### Dependencies
- [react-flexbox-grid](https://github.com/roylee0704/react-flexbox-grid)
- [styled-components](https://github.com/styled-components/styled-components)
- [react router v4](https://reacttraining.com/react-router/web/api/)
- [flow type](https://github.com/flowtype/flow-typed)
- eslint ([airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))
