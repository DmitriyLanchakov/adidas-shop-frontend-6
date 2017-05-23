/* eslint arrow-body-style: ["error", "as-needed"] */
import styled from 'styled-components';
import { media } from '../styled-components/helpers';

export const LogoLayout = styled.div`
  margin: 3.1rem auto;
  text-align: center;
  ${media.sm('max')`
    display: inline-block;
    margin: 1rem 2rem;
    text-align: left;
    float: left;
  `}
`;

export const MenuToggleBox = styled.span`
  width: 5rem;
  height: 2.4rem;
  display: inline-block;
  position: relative;
`;
export const MenuToggleInnder = styled.span`
  display: block;
  top: 50%;
  margin-top: -2px;
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  &,
  &::before,
  &::after {
    width: 5rem;
    height: 0.4rem;
    background-color: #fff;
    position: absolute;
  }
  &::before,
  &::after {
    content: "";
    display: block;
  }
  &::before {
    top: -1.3rem;
  }
  &::after {
    bottom: -1.3rem;
  }
`;
export const MenuToggle = styled.button`
  padding: 1.5rem 1.5rem;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
`;

export const MobileTogglerNav = styled.div`
  ${media.sm('min')`display: none;`}
  ${media.sm('max')`
    display: inline-block;
    position: relative;
    float: right;
    margin: 3rem;
    button {
      box-shadow: none;
      border: 0;
      padding: 0;
      width: 3rem;
      height: 2rem;
      cursor: pointer;
      position: relative;
      background: transparent;
    }
  `}
`;

export const NavbarLayout = styled.div`
  ${media.sm('max')`
    max-width: 41.4rem;
    margin: auto;
    clear: both;
    padding: 0 2rem;
  `}
`;

export const SearchLayout = styled.div`
  padding: 0 2rem;
  ${media.sm('min')`margin: 0 0 15vh;`}
  form {
    position: relative;
  }
`;
