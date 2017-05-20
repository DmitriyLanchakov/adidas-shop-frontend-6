// @flow
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { CatalogFilter, CatalogItem } from '../../../components/products/list';
import { Hr, Main } from './styled-component';
import Preloader from '../../../components/preloader';
import { FETCH_PRODUCTS_URL } from '../../../services/api';
import image from '../../../assets/img/bitmap.jpg';

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
  static selectFilter(e: Object) {
    const { dataset: { fname, value } }: Filter = e.target;
    e.target.classList.toggle('is-active');
    // eslint-disable-next-line no-console
    console.log(fname, value);
  }
  constructor() {
    super();
    this.state = {
      products: {},
      fetching: true,
      error: false,
    };
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

  render() {
    const { products, fetching, error } = this.state;

    if (error) return <div>Ошибка загрузке</div>;
    if (fetching) return <Preloader />;
    if (!fetching && !products.length) return <div>0 - Товаров</div>;

    return (
      <div>
        <header>
          <CatalogFilter filterChange={this.constructor.selectFilter} />
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
      </div>
    );
  }
}

export default Home;
