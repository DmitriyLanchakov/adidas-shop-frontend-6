/* eslint arrow-body-style: ["error", "as-needed"] */
import styled from 'styled-components';
import { media } from '../../../styled-components/helpers';

export const Description = styled.div`
  margin-top: 3rem;
  line-height: 1.5;
  font-family: ${props => props.theme.fonts.avenir};
  font-size: 3.3rem;
  color: #d8d8d8;
  ${media.sm('max')`font-size: 3rem;`}
  p {
    &::selection { color: black; background-color: #e3e3e3; }
  }
  strong, b {
    color: #6e6e6e;
    &::selection {
      color: ${props => props.theme.colors.blue};
      background-color: #e3e3e3;
    }
  }
`;

export const Image = styled.div`
  margin-top: -18.5rem;
  img { width: 100% };
  ${media.sm('max')`margin-top`}
`;

export const ProductLayout = styled.div`
  padding: 1.2rem 3.7rem 0 3.1rem;
  margin: 0;
  position: relative;

  .otherLink {
    position: relative;
    flex-basis: 10%;
  }
`;

export const Price = styled.div`
  margin-top: -5rem;
  font-size: 8rem;
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.ariabold};
  color: #e2e2e2;
  ${media.sm('max')`
    margin-top: 0;
    padding-right: 1rem;
    min-height: 8.5rem;
  `}

  &::${props => props.money} { content: '$'; display: inline-block; }
`;

export const Label = styled.div`
  margin-top: -2rem;
  padding: 3rem 2rem;
  position: relative;
  border-radius: 100%;
  font-size: 1.8rem;
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.ariabold};

  ${props => props.default && 'color: #fff; background-color: #e3e3e3;'}
`;

export const BtnMoreImage = styled.div`
  left: 0;
  color: #e7e7e7;
  position: absolute;
  width: 100%;
  height: 0.3rem;
  background-color: currentColor;
  span {
    &::before {
      content: '';
      position: absolute;
      top: 1.4rem;
      left: 0;
      width: 100%;
      height: 0.3rem;
      background-color: currentColor;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0.7rem;
      left: 0;
      width: 100%;
      height: 0.3rem;
      background-color: currentColor;
    }
  }
`;

export const BtnMore = styled.div`
  cursor: pointer;
  font-size: 1.4rem;
  color: #c0c0c0;
  max-width: 4rem;
  padding-left: 2rem;
  transition: 0.6s;
  box-shadow: none;
`;

export const ByNow = styled.div`
  text-align: center;
  @supports (position: sticky) {
    position: sticky;
    bottom: 0;
  }
  button {
    padding: 3.4rem 0 3.6rem;
    background: transparent;
    box-shadow: none;
    border: 0;
    width: 100%;
    color: #fff;
    font-size: 3.2rem;
    font-family: ${props => props.theme.fonts.ariabold};
    text-transform: uppercase;
    display: block;
    cursor: pointer;
    background-image: linear-gradient(to right, #4949aa, #27275d)
  }
`;
