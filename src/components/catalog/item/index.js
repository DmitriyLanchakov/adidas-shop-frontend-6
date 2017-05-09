import React from 'react';
import { Link } from 'react-router-dom';
import ProductLabel from '../../label';
import itemPhoto from '../../../assets/img/bitmap.jpg';

const CatalogItem = () => {
  return (
    <div className="col-s-6 col-m-4 col-l-3">
      <article className="b-catalog__item" role="treeitem">
        <ProductLabel name="sale" />
        <div className="b-item__img">
          <img
            src={itemPhoto}
            alt="картинка" draggable="false"
          />
        </div>
        <footer className="b-item__price">
          <Link to="/item" className="with-type__money is_before">170</Link>
        </footer>
      </article>
    </div>
  );
};

export default CatalogItem;
