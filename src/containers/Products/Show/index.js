import React from 'react';
import { Row } from 'react-flexbox-grid';
import {
  Description, Image, ProductLayout,
  Price, Label, BtnMoreImage, BtnMore,
  ByNow,
} from './styled-component';
import { ProductHeader, SubImage } from '../../../components/products/show';
import productimg from '../../../assets/img/bitmap-copy.png';

const CatalogItem = () => {
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

        <Row flow="row wrap" center="xs">
          <Image>
            <img
              src={productimg}
              role="presentation"
              alt="картинка" draggable="false"
            />
          </Image>
        </Row>

        <Row start="start" middle="xs">
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
        <Description>
          <p><b>Adidas</b> is a German multinational corporation, headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories.</p>
        </Description>
      </ProductLayout>

      <ByNow>
        <button type="button" aria-label="купить">buy now</button>
      </ByNow>
    </main>
  );
};

export default CatalogItem;
