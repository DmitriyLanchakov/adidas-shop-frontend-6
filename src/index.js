import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css';
import Layout from './components/layout';
import StyleConfig from './styled-components/config';

import Catalog from './containers/Catalog/List';
import CatalogItem from './containers/Catalog/Item';
import './styled-components/global';

render(
  <BrowserRouter>
    <ThemeProvider theme={StyleConfig}>
      <Layout>
        <Route exact path="/" component={Catalog} />
        <Route path="/item" component={CatalogItem} />
      </Layout>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
