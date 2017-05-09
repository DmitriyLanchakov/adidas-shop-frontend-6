import React from 'react';
import ProductLabel from '../../label';
import itemPhoto from '../../../assets/img/bitmap.jpg';

const CatalogItem = () => {
  return (
    <div className="col-s-6 col-m-4 col-l-4">
      <article className="b-catalog__item" role="treeitem">
        <ProductLabel name="sale" />
        <div className="b-item__img">
          <img
            src={itemPhoto}
            alt="картинка" draggable="false"
          />
        </div>
        <footer className="b-item__price">
          <a href="/item.html" role="link" className="with-type__money is_before">170</a>
        </footer>
      </article>
    </div>
  );
};

export default CatalogItem;
