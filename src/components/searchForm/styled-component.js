/* eslint arrow-body-style: ["error", "as-needed"] */
import styled from 'styled-components';

export const Input = styled.input`
  color: ${props => props.theme.colors.searchInput};
  opacity: 0.56;
  text-transform: uppercase;
  font-size: 2.4rem;
  font-family: ${props => props.theme.fonts.ariabold};
  outline-style: none;
  padding-bottom: 5px;
  padding-left: 4.5rem;
  background-color: transparent;
  border-width: 0 0 0.4rem;
  border-color: ${props => props.theme.colors.searchBorder};
  width: 100%;
`;

export const Button = styled.button`
  padding: 0;
  top: 0.3rem;
  left: 0;
  opacity: 0.8;
  width: 2.1rem;
  height: 2.2rem;
  position: absolute;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  box-shadow: none;
`;

export const SearchIcon = styled.span`
  color: #fff;
  top: -0.5rem;
  left: 0.5rem;
  position: absolute;
  width: 14px;
  height: 14px;
  border: solid 0.3rem currentColor;
  border-radius: 100%;
  transform: rotate(-45deg);

  &::before {
    content: '';
    position: absolute;
    top: 1.4rem;left: 0.6rem;
    width: 0.3rem; height: 1.5rem;
    background-color: currentColor;
  }
`;
