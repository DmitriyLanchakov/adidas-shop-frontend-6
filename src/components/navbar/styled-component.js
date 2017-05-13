/* eslint arrow-body-style: ["error", "as-needed"] */
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarLink = styled(({
  hasSubnav, isSubitem, ...rest
}) => <NavLink {...rest} />)`
  font-family: ${props => props.theme.fonts.andale};
  color: ${props => props.theme.colors.navbarSubLink};
  transition: ${props => props.theme.transition};
  margin: 1.5rem 0;
  color: white;
  opacity: 0.2;
  display: block;
  position: relative;
  font-size: 2.4rem;
  text-transform: uppercase;

  ${props => props.hasSubnav && `
    font-family: ${props.theme.fonts.ariabold};
    position: relative;
    &::after {
      content: "";
      top: 1.2rem;
      margin-left: 1rem;
      width: .7rem; height: .7rem;
      transition: transform .6s;
      position: absolute;
      border-top: .3rem solid currentColor;
      border-right: .3rem solid currentColor;
      transform: rotate(-40deg);
    }
  `};

  ${props => (props.isSubitem ? `
    &:hover {
      opacity: 1;
      transition: ${props.theme.transition};
    }
  ` : `
    font-family: ${props.theme.fonts.ariabold};
  `)};

  &:hover {
    opacity: 1;
    transition: ${props => props.theme.transition};
  };

  &.is-active { opacity: 1 }
`;

export const NavbarLayout = styled.nav`
  margin: 15vh 0 0;
  width: 100%;
  text-align: center;
  > nav { margin: 3rem 0; }
`;
