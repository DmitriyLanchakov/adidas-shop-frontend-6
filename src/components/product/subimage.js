import React from 'react';
import { bool } from 'prop-types';
import { SubImage } from './styled-component';
import img from '../../assets/img/bitmap-copy.png';

const SubImages = ({ active }) => {
  console.log(active);
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

SubImages.propTypes = {
  active: bool,
};

SubImages.defaultProps = {
  active: false,
};

export default SubImages;
