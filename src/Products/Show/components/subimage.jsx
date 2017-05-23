// @flow
import React from 'react';
import { SubImage } from './styled-component';


type Props = {
  image: string,
  numb: number,
}
const SubImages = ({ image, numb }: Props) => {
  return (
    <SubImage>
      <img
        data-key={numb}
        src={image}
        role="presentation"
        alt="картинка"
        draggable="false"
      />
    </SubImage>
  );
};

export default SubImages;
