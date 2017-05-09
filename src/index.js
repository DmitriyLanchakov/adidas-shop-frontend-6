import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/layout';
import StyleConfig from './StyleConfig';


import Catalog from './containers/Catalog';
import CatalogItem from './containers/CatalogItem';
import './assets/css/default.css';

render(
  <BrowserRouter>
    <ThemeProvider theme={StyleConfig}>
      <Layout>
        <Route exact path="/" component={Catalog} />
        <Route exact path="/item" component={CatalogItem} />
      </Layout>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
