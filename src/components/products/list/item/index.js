import React from 'react';
import {
  Price, ProductLink, ImageLayout, ItemLayout,
} from './styled-component';
import ProductLabel from '../../label';

type Props = {
  photo: string,
  price: number,
  sale: boolean,
  id: number,
}
const CatalogItem = ({ photo, price, sale, id }: Props) => {
  return (
    <div role="listitem">
      <ItemLayout role="treeitem">
        {sale && <ProductLabel name="sale" />}
        <ImageLayout>
          <img src={photo} alt="картинка" draggable="false" />
        </ImageLayout>
        <Price>
          <ProductLink to={`/item/${id}`} inShop money="before" >{price}</ProductLink>
        </Price>
      </ItemLayout>
    </div>
  );
};

export default CatalogItem;
