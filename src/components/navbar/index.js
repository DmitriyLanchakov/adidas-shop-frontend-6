import React from 'react';
import { NavbarLayout, NavbarLink } from './styled-component';

const Navbar = () => {
  return (
    <NavbarLayout role="navigation" aria-label="меню">
      <NavbarLink to="/" isActive hasSubnav>SPORTS</NavbarLink>

      <NavbarLayout role="navigation" aria-label="меню">
        <NavbarLink isSubitem role="menuitem" to="/">shoes</NavbarLink>
        <NavbarLink isSubitem role="menuitem" to="/">clothing</NavbarLink>
      </NavbarLayout>

      <NavbarLink role="menuitem" to="/">brand</NavbarLink>
      <NavbarLink role="menuitem" to="/">micoach</NavbarLink>
    </NavbarLayout>
  );
};

export default Navbar;
