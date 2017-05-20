// @flow
import React, { Component } from 'react';
import { Row } from 'react-flexbox-grid';
import {
  Description, Image, ProductLayout,
  Label, ByNow, HeaderLayout,
} from './styled-component';
import Preloader from '../../../components/preloader';
import { ProductHeader, SubImage } from '../../../components/products/show';
import { FETCH_PRODUCTS_URL } from '../../../services/api';

import image from '../../../assets/img/bitmap-copy.png';
import imageA from '../../../assets/img/subImage1.jpg';

const subImageArray = [image, imageA, image, imageA, image];

type Props = {
  match: {
    params: { id: number }
  }
}
type State = {
  item: Object,
  fetching: boolean,
  error: boolean,
  imageActive: number,
}

class CatalogItem extends Component<void, Props, State> {
  constructor() {
    super();
    this.state = {
      item: {},
      fetching: true,
      error: false,
      imageActive: 0,
    };
  }
  state: State;
  async componentDidMount(): any {
    try {
      const { match: { params: { id } } } = this.props;
      const res = await fetch(`${FETCH_PRODUCTS_URL}/${id}`);
      const item = await res.json();
      await this.setStateAsync({ item, fetching: false });
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
    const { item, fetching, error, imageActive } = this.state;

    const changeActiveImage = (e: Object) => {
      this.setState({ imageActive: parseFloat(e.target.dataset.key) });
    };

    const colors = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#e0e0e0'];

    if (error) return <div>Ошибка загрузке</div>;
    if (fetching) return <Preloader />;

    return (
      <main role="main" aria-label="Основная часть">
        <ProductLayout>

          <HeaderLayout>

            <ProductHeader
              name="ultra boots"
              colors={colors}
              price={170}
            />

            <Row start="xs">
              <Label default>sale</Label>
            </Row>
          </HeaderLayout>

          <Row center="xs">
            <Image>
              <img
                src={subImageArray[imageActive]}
                role="presentation"
                alt="картинка"
                draggable="false"
              />
            </Image>
          </Row>

          <Row center="xs" middle="xs">
            {subImageArray.map((si, key) => {
              return (
                <SubImage
                  click={changeActiveImage}
                  image={si}
                  // eslint-disable-next-line
                  key={key}
                  numb={key}
                  isActive={key === imageActive}
                />
              );
            })}
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
