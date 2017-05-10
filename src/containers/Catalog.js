import React from 'react';
import { CatalogFilter, CatalogItem } from '../components/catalog';
import Col from '../styled-components/col';

const Home = () => {
  return (
    <div>
      <header>
        <CatalogFilter />
      </header>
      <hr className="e-border" />
      <main role="main" aria-label="Основная часть">
        <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
          <Col xs={12} sm={3} md={3} lg={4} >1</Col>
          <Col xs={12} sm={3} md={3} lg={4} >2</Col>
          <Col xs={12} sm={3} md={3} lg={4} >3</Col>
          <Col xs={12} sm={3} md={3} lg={4} >4</Col>
        </div>
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
