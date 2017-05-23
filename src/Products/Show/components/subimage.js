// @flow
import React from 'react';
import { SubImage } from './styled-component';


type Props = {
  isActive: boolean,
  image: string,
  numb: number,
  changeActiveImage: Function,
}
const SubImages = ({ isActive, image, changeActiveImage, numb }: Props) => {
  return (
    <SubImage
      onClick={() => { return changeActiveImage(numb); }}
      isActive={isActive}
    >
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
