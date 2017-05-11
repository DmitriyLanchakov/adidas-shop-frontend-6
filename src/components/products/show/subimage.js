// @flow
import React from 'react';
import { SubImage } from './styled-component';
import img from '../../../assets/img/bitmap-copy.png';

type Props = {
  active: boolean,
}
const SubImages = ({ active = false }: Props) => {
  return (
    <SubImage active={active}>
      <img
        src={img}
        role="presentation"
        alt="картинка" draggable="false"
      />
    </SubImage>
  );
};

export default SubImages;
