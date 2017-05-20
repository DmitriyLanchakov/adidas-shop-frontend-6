// @flow
import React from 'react';
import { Col } from 'react-flexbox-grid';
import { SubImage } from './styled-component';


type Props = {
  isActive: boolean,
  image: string,
  numb: number,
  click: Function,
}
const SubImages = ({ isActive, image, click, numb }: Props) => {
  return (
    <Col xs={2}>
      <SubImage
        onClick={click}
        className={isActive ? 'is-active' : ''}
      >
        <img
          data-key={numb}
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
