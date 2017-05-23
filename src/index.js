/* eslint-disable react/jsx-filename-extension */
import 'whatwg-fetch';
import 'normalize.css';
import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StyleConfig from './styled-components/config';

import ProductList from './Products/List';
import ProductShow from './Products/Show';
import NotFound from './NotFound';

import './styled-components/global';

render(
  <BrowserRouter>
    <ThemeProvider theme={StyleConfig}>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/item/:id" component={ProductShow} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
