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
          <Col
            xs={12} sm={6} md={4} lg={2}
            altMin={'400px'} altMax={'900px'} altCol={10}
          >1</Col>
          <Col xs={12} sm={6} md={4} lg={2} >2</Col>
          <Col xs={12} sm={6} md={4} lg={2} >3</Col>
          <Col xs={12} sm={6} md={4} lg={2} >4</Col>
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
