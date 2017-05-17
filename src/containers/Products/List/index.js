// @flow
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { CatalogFilter, CatalogItem } from '../../../components/products/list';
import { Hr, Main } from './styled-component';
import Preloader from '../../../components/preloader';
import { FETCH_PRODUCTS_URL } from '../../../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: {},
      fetching: true,
    };
    this.selectFilter = this.selectFilter.bind(this);
  }
  state: { products: Object, fetching: boolean }

  async componentDidMount(): any {
    const res = await fetch(FETCH_PRODUCTS_URL);
    const products = await res.json();
    await this.setStateAsync({ products, fetching: false });
  }

  setStateAsync(state: Object) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  selectFilter: Function;
  selectFilter(e: Object) { // eslint-disable-line
    type Filter = {
      dataset: { fname: string, value: string }
    };
    const { dataset: { fname, value } }: Filter = e.target;
    e.target.classList.toggle('is-active');
    console.log(fname, value);
  }
  render() {
    const { products, fetching } = this.state;

    if (fetching) return <Preloader />;
    if (!fetching && !products.length) return <div>0 - Товаров</div>;

    return (
      <div>
        <header>
          <CatalogFilter filterChange={this.selectFilter} />
        </header>
        <Hr />
        <Main role="main" aria-label="Основная часть">
          <Row start="xs" role="group">
            {[...Array(15)].map(() => {
              return (
                <Col xs={12} sm={6} md={4} lg={4} key={Math.random()}>
                  <CatalogItem
                    photo={'../../../../assets/img/bitmap.jpg'}
                    price={170} sale
                    id={12}
                  />
                </Col>
              );
            })}
          </Row>
        </Main>
      </div>
    );
  }
}

export default Home;
