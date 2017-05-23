// @flow
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import {
  Description, Image, ProductLayout,
  ByNow, HeaderLayout,
} from './styled-component';
import Preloader from '../../components/preloader';
import { Header, SubImage } from './components';
import { FETCH_PRODUCTS_URL } from '../../services/api';

import image from '../../assets/img/bitmap-copy.png';
import imageA from '../../assets/img/subImage1.jpg';

const subImageArray = [image, imageA, image, imageA, image];
const colorsData = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#e0e0e0'];

type Props = {
  match: Object,
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
    this.changeActiveImage = this.changeActiveImage.bind(this);
  }
  state: State;
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`${FETCH_PRODUCTS_URL}/${id}`)
      .then(resp => { return resp.json(); })
      .then(item => {
        return this.setState({ item, fetching: false });
      })
      .catch(() => {
        return this.setState({ error: true });
      });
  }
  props: Props;
  changeActiveImage: Function;
  changeActiveImage(keyImage: number) {
    this.setState({ imageActive: parseFloat(keyImage) });
  }

  render() {
    const { item, fetching, error, imageActive } = this.state;

    if (error) return <div>Ошибка загрузке</div>;
    if (fetching) return <Preloader />;

    return (
      <main role="main" aria-label="Основная часть">
        <ProductLayout>

          <HeaderLayout>

            <Header
              name="ultra boots"
              colors={colorsData}
              price={170}
            />

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
                // eslint-disable-next-line
                <Col xs={2} key={key}>
                  <SubImage
                    changeActiveImage={this.changeActiveImage}
                    image={si}
                    numb={key}
                    isActive={key === imageActive}
                  />
                </Col>
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
