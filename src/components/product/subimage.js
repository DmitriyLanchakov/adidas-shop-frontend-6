import React from 'react';
import { string } from 'prop-types';
import img from '../../assets/img/bitmap-copy.png';

const SubImages = ({ cls }) => {
  return (
    <div className={`b-subImage ${cls}`}>
      <img
        src={img}
        role="presentation"
        alt="картинка" draggable="false"
      />
    </div>
  );
};

SubImages.propTypes = {
  cls: string,
};

SubImages.defaultProps = {
  cls: '',
};

export default SubImages;
