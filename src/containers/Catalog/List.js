import React from 'react';
import { CatalogFilter, CatalogItem } from '../../components/catalog';
import { Hr } from '../../styled-components/catalog/list';
import Flexbox from '../../styled-components/flexbox';
import Col from '../../styled-components/col';

const Home = () => {
  return (
    <div>
      <header>
        <CatalogFilter />
      </header>
      <Hr />
      <main role="main" aria-label="Основная часть">
        <Flexbox
          flow="row wrap" justify="flex-start"
          role="group" style={{ textAlign: 'center' }}
        >
          {[...Array(15)].map(() => {
            return (
              <Col xs={12} sm={6} md={4} lg={3} >
                <CatalogItem />
              </Col>
            );
          })}
        </Flexbox>
      </main>
    </div>
  );
};

export default Home;
