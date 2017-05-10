/* eslint arrow-body-style: ["error", "as-needed"] */
import styled from 'styled-components';

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

export const Title = styled.h1`
  margin: 0;
  font-size: 6.4rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.ligth_black};
  font-family: ${props => props.theme.fonts.ariabold};
`;
