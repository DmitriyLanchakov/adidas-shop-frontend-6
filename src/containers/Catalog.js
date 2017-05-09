import React from 'react';
import { CatalogFilter, CatalogItem } from '../components/catalog';

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
