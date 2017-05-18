// @flow
import React, { Component } from 'react';
import { Row } from 'react-flexbox-grid';
import {
  Description, Image, ProductLayout,
  Price, Label, BtnMoreImage, BtnMore,
  ByNow,
} from './styled-component';
import { ProductHeader, SubImage } from '../../../components/products/show';
import productimg from '../../../assets/img/bitmap-copy.png';
import Preloader from '../../../components/preloader';
import { FETCH_PRODUCTS_URL } from '../../../services/api';

type Props = {
  match: {
    params: { id: number }
  }
}
type State = {
  item: Object,
  fetching: boolean,
}

class CatalogItem extends Component<void, Props, State> {
  constructor() {
    super();
    this.state = {
      item: {},
      fetching: true,
    };
  }
  state: State;
  async componentDidMount(): any {
    const { match: { params: { id } } } = this.props;
    const res = await fetch(`${FETCH_PRODUCTS_URL}/${id}`);
    const item = await res.json();
    await this.setStateAsync({ item, fetching: false });
  }
  setStateAsync(state: Object) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  render() {
    const { item, fetching } = this.state;
    if (fetching) return <Preloader />;
    return (
      <main role="main" aria-label="Основная часть">
        <ProductLayout>

          <div style={{ position: 'relative' }}>
            <ProductHeader name="ultra boots" />
            <Row end="xs" role="math">
              <Price money="before">170</Price>
            </Row>
            <Row start="xs">
              <Label default>sale</Label>
            </Row>
          </div>

          <Row center="xs">
            <Image>
              <img
                src={productimg}
                role="presentation"
                alt="картинка"
                draggable="false"
              />
            </Image>
          </Row>

          <Row start="xs" middle="xs">
            <SubImage active />
            <SubImage />
            <SubImage />
            <SubImage />
            <div className="otherLink">
              <BtnMoreImage><span /></BtnMoreImage>
            </div>
            <div className="otherLink">
              <BtnMore>see more photos</BtnMore>
            </div>
          </Row>
          <Description dangerouslySetInnerHTML={{ __html: item.body }} />
        </ProductLayout>

        <ByNow>
          <button type="button" aria-label="купить">buy now</button>
        </ByNow>
      </main>
    );
  }
}

export default CatalogItem;
