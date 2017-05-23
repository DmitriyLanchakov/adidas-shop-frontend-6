// @flow
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import CatalogItem from './item';
import CatalogFilter from './filter';
import { Hr, Main } from './styled-component';
import Preloader from '../../components/preloader';
import { FETCH_PRODUCTS_URL } from '../../services/api';
import image from '../../assets/img/bitmap.jpg';

type State = {
  products: Object,
  fetching: boolean,
  error: boolean,
}

class Home extends Component<void, void, State> {
  static selectFilter(data: Object) {
    // {label: "size", value: 37}
    // eslint-disable-next-line no-console
    console.log(data);
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

  componentDidMount() {
    fetch(FETCH_PRODUCTS_URL)
      .then(resp => { return resp.json(); })
      .then(products => {
        return this.setState({ products, fetching: false });
      })
      .catch(() => {
        return this.setState({ error: true });
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
          <CatalogFilter onChange={this.constructor.selectFilter} />
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
