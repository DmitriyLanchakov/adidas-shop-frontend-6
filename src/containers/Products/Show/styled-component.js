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

export const HeaderLayout = styled.div`
  position: relative;
`;

export const Image = styled.div`
  img { width: 100% };
  ${media.sm('min')`margin-top: -18.5rem;`}
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
