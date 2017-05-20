import 'whatwg-fetch';
import 'normalize.css';
import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/layout';
import StyleConfig from './styled-components/config';
import registerServiceWorker from './registerServiceWorker';

import ProductList from './containers/Products/List';
import ProductShow from './containers/Products/Show';
import NotFound from './containers/NotFound';

import './styled-components/global';

render(
  <BrowserRouter>
    <ThemeProvider theme={StyleConfig}>
      <Layout>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/item/:id" component={ProductShow} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </Layout>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
