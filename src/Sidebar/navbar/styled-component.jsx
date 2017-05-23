/* eslint arrow-body-style: ["error", "as-needed"] */
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarLink = styled(({
  isOpen, hasSubnav, isSubitem, ...rest
}) => <NavLink {...rest} />)`
  font-family: ${props => props.theme.fonts.andale};
  color: ${props => props.theme.colors.navbarSubLink};
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
      top: ${props.isOpen ? '1.2' : '0.8'}rem;
      margin-left: 1rem;
      width: .7rem; height: .7rem;
      position: absolute;
      border-top: .3rem solid currentColor;
      border-right: .3rem solid currentColor;
      transform: ${props.isOpen ? 'rotate(-45deg)' : 'rotate(135deg)'};
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
  width: 100%;
  text-align: center;
  ${props => props.hasChildren && 'margin: 3rem 0;'}
`;
