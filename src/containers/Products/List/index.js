// @flow
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { CatalogFilter, CatalogItem } from '../../../components/products/list';
import { Hr, Main } from './styled-component';
import Preloader from '../../../components/preloader';
import { FETCH_PRODUCTS_URL } from '../../../services/api';

type State = {
  products: Object,
  fetching: boolean,
  error: boolean,
}
type Filter = {
  dataset: {
    fname: string,
    value: string,
  },
}

class Home extends Component<void, void, State> {
  constructor() {
    super();
    this.state = {
      products: {},
      fetching: true,
      error: false,
    };
    this.selectFilter = this.selectFilter.bind(this);
  }
  state: State;

  async componentDidMount(): any {
    try {
      const res = await fetch(FETCH_PRODUCTS_URL);
      const products = await res.json();
      await this.setStateAsync({ products, fetching: false });
    } catch (err) {
      this.setStateAsync({ error: true });
      throw Error(err);
    }
  }

  setStateAsync(state: Object): Promise<*> {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  selectFilter: () => void;
  selectFilter(e: Object) { // eslint-disable-line
    const { dataset: { fname, value } }: Filter = e.target;
    e.target.classList.toggle('is-active');
    console.log(fname, value); // eslint-disable-line
  }
  render() {
    const { products, fetching, error } = this.state;

    if (error) return <div>Ошибка загрузке</div>;
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
                    price={170}
                    sale
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
