// @flow
/* eslint arrow-body-style: ["error", "as-needed"] */
import React from 'react';
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

type Props = {
  name: string,
}
const ProductLabel = ({ name }: Props) => <Label>{name}</Label>;

export default ProductLabel;
