import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/layout';


import Catalog from './containers/Catalog';
import CatalogItem from './containers/CatalogItem';
import './assets/css/default.css';

render(
  <BrowserRouter>
    <Layout>
      <Route exact path="/" component={Catalog} />
      <Route exact path="/item" component={CatalogItem} />
    </Layout>
  </BrowserRouter>,
  document.getElementById('root'),
);
