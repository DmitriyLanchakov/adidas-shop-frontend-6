import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import 'whatwg-fetch';
import 'normalize.css';
import Layout from './components/layout';
import StyleConfig from './styled-components/config';

import ProductList from './containers/Products/List';
import ProductShow from './containers/Products/Show';
import './styled-components/global';

render(
  <BrowserRouter>
    <ThemeProvider theme={StyleConfig}>
      <Layout>
        <Route exact path="/" component={ProductList} />
        <Route path="/item/:id" component={ProductShow} />
      </Layout>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
