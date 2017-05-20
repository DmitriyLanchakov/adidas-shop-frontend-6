// @flow
import React from 'react';
import { Col } from 'react-flexbox-grid';
import { SubImage } from './styled-component';
import image from '../../../assets/img/bitmap-copy.png';

type Props = {
  isActive: boolean,
}
const SubImages = ({ isActive }: Props) => {
  return (
    <Col xs={2}>
      <SubImage isActive={isActive}>
        <img
          src={image}
          role="presentation"
          alt="картинка"
          draggable="false"
        />
      </SubImage>
    </Col>
  );
};

export default SubImages;
