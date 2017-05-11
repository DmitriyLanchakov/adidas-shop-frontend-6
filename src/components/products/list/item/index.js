import React from 'react';
import {
  Price, ProductLink, ImageLayout, ItemLayout,
} from './styled-component';
import ProductLabel from '../../label';
import itemPhoto from '../../../../assets/img/bitmap.jpg';

const CatalogItem = () => {
  return (
    <div role="listitem">
      <ItemLayout role="treeitem">
        <ProductLabel name="sale" />
        <ImageLayout>
          <img src={itemPhoto} alt="картинка" draggable="false" />
        </ImageLayout>
        <Price>
          <ProductLink to="/item" inShop money="before" >170</ProductLink>
        </Price>
      </ItemLayout>
    </div>
  );
};

export default CatalogItem;
