import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Label = styled.span`
  position: absolute;
  top: 1.3rem;
  right: 1.6rem;
  font-family: ${props => props.theme.fonts.ariabold};
  text-transform: uppercase;
  color: #fff;
  font-size: 1.4rem;
  padding: 0.6rem 2.1rem;
  background-color: ${props => props.theme.colors.red};
`;

const ProductLabel = ({ name }) => {
  return <Label>{name}</Label>;
};

ProductLabel.propTypes = {
  name: string,
};
ProductLabel.defaultProps = {
  name: '',
};

export default ProductLabel;
