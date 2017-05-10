import React from 'react';
import {
  ProductPrice, ProductLink, ProductImageLayout, ProductItemLayout,
} from './styled-component';
import ProductLabel from '../../label';
import itemPhoto from '../../../assets/img/bitmap.jpg';

const CatalogItem = () => {
  return (
    <div role="listitem">
      <ProductItemLayout role="treeitem">
        <ProductLabel name="sale" />
        <ProductImageLayout>
          <img
            src={itemPhoto}
            alt="картинка" draggable="false"
          />
        </ProductImageLayout>
        <ProductPrice >
          <ProductLink to="/item" inshop money="before" >170</ProductLink>
        </ProductPrice>
      </ProductItemLayout>
    </div>
  );
};

export default CatalogItem;
