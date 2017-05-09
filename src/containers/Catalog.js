import React from 'react';
import Layout from '../components/layout';
import { CatalogFilter, CatalogItem } from '../components/catalog';

const Home = () => {
  return (
    <Layout>
      <header>
        <CatalogFilter />
      </header>
      <hr className="e-border" />
      <main role="main" aria-label="Основная часть">
        <div
          className="b-catalog b-flex is-row is-start is-stretch"
          role="group"
        >
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
          <CatalogItem />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
