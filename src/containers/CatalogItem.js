import React from 'react';
import Flexbox from '../styled-components/flexbox';
import ProductHeader from '../components/product/header';
import ProductLabel from '../components/label';
import SubImage from '../components/product/subimage';
import productimg from '../assets/img/bitmap-copy.png';

const CatalogItem = () => {
  return (
    <main role="main" aria-label="Основная часть">
      <div className="b-item">

        <ProductHeader name="ultra boots" />

        <Flexbox
          flow="row wrap" justify="flex-end"
          role="math"
          className="b-price with-type__money m-pos_relative is_before"
        >170</Flexbox>

        <Flexbox flow="row wrap" justify="start" className="m-pos_relative">
          <div className="b-info m-default">
            <ProductLabel name="sale" />
          </div>
        </Flexbox>

        <Flexbox flow="row wrap" justify="center">
          <div className="b-item__image">
            <img
              src={productimg}
              role="presentation"
              alt="картинка" draggable="false"
            />
          </div>
        </Flexbox>

        <Flexbox flow="row wrap" justify="flex-start" className="b-subimg">
          <SubImage active />
          <SubImage />
          <SubImage />
          <SubImage />
          <div className="b-subImage">
            <div className="b-more_div">
              <span className="b-more">&nbsp;</span>
            </div>
          </div>
          <div className="b-subImage col-s-4 col-m-1">
            <div className="b-link">see more photos</div>
          </div>
        </Flexbox>

        <div className="b-description">
          <p><b>Adidas</b> is a German multinational corporation, headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories.</p>
        </div>
      </div>

      <div className="b-btn">
        <button type="button" aria-label="купить">buy now</button>
      </div>
    </main>
  );
};

export default CatalogItem;
