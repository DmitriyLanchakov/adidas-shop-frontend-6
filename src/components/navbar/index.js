import React from 'react';
import { NavbarLayout, NavbarLink } from './styled-component';

const menu = [
  {
    id: 1,
    name: 'Sports',
    slug: '/',
    children: [
      { id: 2, name: 'shoes', slug: '/item/1' },
      { id: 3, name: 'clothing', slug: '/item/2' },
      { id: 4, name: 'accesories', slug: '/item/3' },
    ],
  },
  { id: 5, name: 'Brands', slug: '/error' },
  { id: 6, name: 'Micoash', slug: '/notfound' },
];
const Navbar = () => {
  return (
    <NavbarLayout role="navigation" aria-label="меню">
      {menu.map(nav => {
        return (
          <div key={nav.id}>
            <NavbarLink
              to={nav.slug}
              hasSubnav={!!nav.children}
              exact
              role="menuitem"
              activeClassName="is-active"
            >{nav.name}</NavbarLink>
            {nav.children && <NavbarLayout
              role="navigation"
              aria-label="меню"
              hasChildren
              key={nav.id}
            >
              {nav.children.map(subnav => {
                return (
                  <NavbarLink
                    isSubitem
                    activeClassName="is-active"
                    role="menuitem"
                    key={subnav.id}
                    to={subnav.slug}
                  >{subnav.name}</NavbarLink>
                );
              })}
            </NavbarLayout>}
          </div>
        );
      })}
    </NavbarLayout>
  );
};

export default Navbar;
