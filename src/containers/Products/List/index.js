import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { CatalogFilter, CatalogItem } from '../../../components/products/list';
import { Hr, Main } from './styled-component';


const Home = () => {
  return (
    <div>
      <header>
        <CatalogFilter />
      </header>
      <Hr />
      <Main role="main" aria-label="Основная часть">
        <Row start="xs" role="group">
          {[...Array(15)].map(() => {
            return (
              <Col xs={12} sm={6} md={4} lg={3} key={Math.random()}>
                <CatalogItem />
              </Col>
            );
          })}
        </Row>
      </Main>
    </div>
  );
};

export default Home;
