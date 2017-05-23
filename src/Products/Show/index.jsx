// @flow
import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Sidebar from '../../Sidebar';
import {
  Description, Image, ProductLayout,
  ByNow, HeaderLayout,
} from './styled-component';
import { Header, SubImage } from './components';

import image from '../../assets/img/bitmap-copy.png';
import imageA from '../../assets/img/subImage1.jpg';

const subImageArray = [image, imageA, image, imageA, image];
const colorsData = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#e0e0e0'];

const CatalogItem = () => {
  return (
    <Row className="is-nowrap">
      <aside><Sidebar /></aside>
      <section>
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
                src={subImageArray[0]}
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
                    image={si}
                    numb={key}
                  />
                </Col>
              );
            })}
          </Row>
          <Description>
            is a German multinational corporation, headquartered in
            Herzogenaurach, Germany, that designsand manufactures shoes, clothing and accessories.
          </Description>
        </ProductLayout>

        <ByNow>
          <button type="button" aria-label="купить">buy now</button>
        </ByNow>
      </section>
    </Row>
  );
};

export default CatalogItem;
