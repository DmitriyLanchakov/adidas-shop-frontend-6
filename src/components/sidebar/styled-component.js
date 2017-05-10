/* eslint arrow-body-style: ["error", "as-needed"] */
import styled from 'styled-components';

export const SidebarLogoLayout = styled.div`
  margin: 3.1rem auto;
  @media (max-width: ${props => props.theme.media.sm}) {
    display: inline-block;
    margin: 1rem 2rem;
    text-align: left;
    float: left;
  }
`

export const MenuIcon = styled.span`
  left: 0;
  color: #fff;
  position: absolute;
  width: 3rem;
  height: 0.2rem;
  background-color: currentColor;

  &::before {
    content: '';
    position: absolute;
    top: -0.5rem;
    left: 0;
    width: 3rem;
    height: 0.2rem;
    background-color: currentColor;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0.5rem;
    left: 0;
    width: 3rem;
    height: 0.2rem;
    background-color: currentColor;
}
`;

export const MobileTogglerNav = styled.div`
  @media (min-width: ${props => props.theme.media.sm}) {
    display: none;
  }
  @media (max-width: ${props => props.theme.media.sm}) {
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
  }
`;

export const NavbarLayout = styled.div`
  @media (max-width: ${props => props.theme.media.sm}) {
    max-width: 41.4rem;
    margin: auto;
    clear: both;
    padding: 0 2rem;
  }
`;

export const SearchLayout = styled.div`
  padding: 0 2rem;
  form {
    position: relative;
  }
`;
