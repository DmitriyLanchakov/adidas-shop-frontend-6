// @flow
import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Sidebar from '../../Sidebar';
import CatalogItem from './item';
import CatalogFilter from './filter';
import { Hr, Main } from './styled-component';
import image from '../../assets/img/bitmap.jpg';

const Home = () => {
  return (
    <Row className="is-nowrap">
      <aside><Sidebar /></aside>
      <section>
        <header>
          <CatalogFilter />
        </header>
        <Hr />
        <Main role="main" aria-label="Основная часть">
          <Row start="xs" role="group">
            {[...Array(15)].map(() => {
              return (
                <Col xs={12} md={4} lg={4} key={Math.random()}>
                  <CatalogItem
                    photo={image}
                    price={170}
                    sale
                    id={12}
                  />
                </Col>
              );
            })}
          </Row>
        </Main>
      </section>
    </Row>
  );
};

export default Home;
