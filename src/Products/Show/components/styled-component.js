/* eslint arrow-body-style: ["error", "as-needed"] */
import styled from 'styled-components';
import { media } from '../../../styled-components/helpers';

export const InfoGroup = styled.div`
  text-align: right;
`;

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
  ${props => props.isActive && 'box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.15)'}
`;

export const Price = styled.div`
  font-size: 8rem;
  text-transform: uppercase;
  transition: ${props => props.theme.transition};
  font-family: ${props => props.theme.fonts.ariabold};
  color: ${props => props.color || '#e2e2e2'};
  ${media.sm('max')`
    margin-top: 0;
    padding-right: 1rem;
    min-height: 8.5rem;
  `}

  &::${props => props.money} { content: '$'; display: inline-block; }
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
  transition: ${props => props.theme.transition};
  background-color: #ff5c5c;
  margin-left: 3rem;
`;

export const SubImage = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: 0.5rem solid transparent;
  ${props => props.isActive && 'border-color: #e7e7e7;'}

  img { width: 100%; }
`;

export const Label = styled.div`
  padding: 3rem 2rem;
  position: relative;
  border-radius: 100%;
  font-size: 1.8rem;
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.ariabold};
  ${media.sm('max')`display: none`}
  color: #fff;
  background-color: ${props => props.color || '#e3e3e3'};
`;
