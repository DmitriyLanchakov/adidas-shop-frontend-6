import React from 'react';
import Flexbox from '../styled-components/flexbox';
import {
  ProductDescription, ProductImage, ProductLayout,
  ProductPrice, ProductLabel, ProductBtnMoreImage, ProductBtnMoreText,
  ProductByNow,
} from '../styled-components/products/item';
import ProductHeader from '../components/product/header';
import SubImage from '../components/product/subimage';
import productimg from '../assets/img/bitmap-copy.png';

const CatalogItem = () => {
  return (
    <main role="main" aria-label="Основная часть">
      <ProductLayout>

        <div style={{ position: 'relative' }}>
          <ProductHeader name="ultra boots" />

          <Flexbox
            flow="row wrap" justify="flex-end"
            role="math"
            className="b-price with-type__money m-pos_relative is_before"
          >
            <ProductPrice money="before">170</ProductPrice>
          </Flexbox>

          <Flexbox flow="row wrap" justify="start">
            <ProductLabel default>sale</ProductLabel>
          </Flexbox>

        </div>

        <Flexbox flow="row wrap" justify="center">
          <ProductImage>
            <img
              src={productimg}
              role="presentation"
              alt="картинка" draggable="false"
            />
          </ProductImage>
        </Flexbox>

        <Flexbox flow="row wrap" justify="flex-start" className="b-subimg">
          <SubImage active />
          <SubImage />
          <SubImage />
          <SubImage />
          <div style={{ position: 'relative', flexBasis: '10%' }}>
            <ProductBtnMoreImage><span /></ProductBtnMoreImage>
          </div>
          <div style={{ position: 'relative', flexBasis: '15%' }}>
            <ProductBtnMoreText>see more photos</ProductBtnMoreText>
          </div>
        </Flexbox>
        <ProductDescription>
          <p><b>Adidas</b> is a German multinational corporation, headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories.</p>
        </ProductDescription>
      </ProductLayout>

      <ProductByNow>
        <button type="button" aria-label="купить">buy now</button>
      </ProductByNow>
    </main>
  );
};

export default CatalogItem;
