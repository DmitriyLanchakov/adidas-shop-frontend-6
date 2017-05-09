import React from 'react';
import ProductHeader from '../components/product/header';
import ProductLabel from '../components/label';
import SubImage from '../components/product/subimage';
import productimg from '../assets/img/bitmap-copy.png';

const CatalogItem = () => {
  return (
    <main role="main" aria-label="Основная часть">
      <div className="b-item">
        <ProductHeader name="ultra boots" />
        <div className="b-price with-type__money b-flex is-row is-end m-pos_relative is_before" role="math">170</div>
        <div className="b-flex is-row is-start m-pos_relative">
          <div className="b-info m-default">
            <ProductLabel name="sale" />
          </div>
        </div>
        <div className="b-flex is-row is-center">
          <div className="b-item__image">
            <img
              src={productimg}
              role="presentation"
              alt="картинка" draggable="false"
            />
          </div>
        </div>
        <div className="b-subimg b-flex is-row is-start">
          <SubImage cls="is-active" />
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
        </div>
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
