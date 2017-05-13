/* eslint arrow-body-style: ["error", "as-needed"] */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Price = styled.footer`
  display: block;
`;

export const ProductLink = styled(({
  inShop, money, ...rest
}) => <Link {...rest} />)`
  font-family: ${props => props.theme.fonts.ariabold};
  margin: 0 .8rem .8rem;
  display: block;
  padding: 2.3rem 0;
  font-size: 3rem;

  ${props => (props.inShop ? `
    color: #fff;
    background-image: linear-gradient(107deg, #0c09bf, #966dd8);
  ` : `
    color: black;
    background-color: #fff;
  `)}

  &::${props => props.money} {
    content: "$";
    display: inline-block;
  }
`;

export const ImageLayout = styled.div`
  padding: 0.8rem;
  img {
    width: 100%;
    background-color: #fff;
  }
`;

export const ItemLayout = styled.div`
  margin: 0.8rem 0.5rem;
  padding-bottom: 0.2rem;
  background-color: #f4f4f4;
  text-align: center;
  position: relative;
  img { width: 100%; }
`;
