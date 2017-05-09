import React from 'react';
import { string } from 'prop-types';

const ProductLabel = ({ name }) => {
  return <span className="has-label">{name}</span>;
};

ProductLabel.propTypes = {
  name: string,
};
ProductLabel.defaultProps = {
  name: '',
};

export default ProductLabel;
