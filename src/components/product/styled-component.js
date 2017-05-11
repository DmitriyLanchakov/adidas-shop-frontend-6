/* eslint arrow-body-style: ["error", "as-needed"] */
import styled from 'styled-components';
import { media } from '../../styled-components/helpers';

export const ColorButton = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  border-radius: 100%;
  width: 1.8rem;
  height: 1.8rem;
  position: relative;
  margin: 0 0.75rem;
  background-color: ${props => props.color};
  ${props => props.active && 'width: 2.4rem; height: 2.4rem; top: 5px'}
`;

export const TitleLayout = styled.div`
  max-width: 30rem;
  line-height: 1;
  position: relative;
  ${media.sm('max')`
    max-width: none;
    h1 {
      font-size: 4.5rem;
    }
  `}
`;
export const Title = styled.h1`
  margin: 0;
  font-size: 6.4rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.ligth_black};
  font-family: ${props => props.theme.fonts.ariabold};
`;

export const Badge = styled.div`
  color: #fff;
  font-size: 1.4rem;
  font-family: ${props => props.theme.fonts.ariabold};
  text-transform: uppercase;
  padding: 1rem 2rem;
  background-color: #ff5c5c;
  margin-left: 3rem;
`;

export const SubImage = styled.div`
  flex-basis: 15%;
  position: relative;
  max-width: 17rem;
  max-height: 17rem;
  overflow: hidden;
  border: 0.5rem solid transparent;
  border-color: ${props => props.active ? '#e7e7e7' : ''};

  img { width: 100%; }
`;
