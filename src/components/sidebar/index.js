// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  LogoLayout,
  MenuToggle, MenuToggleBox, MenuToggleInnder,
  MobileTogglerNav, NavbarLayout,
  SearchLayout,
} from './styled-component';
import Logo from '../logo';
import Navbar from '../navbar';
import SearchForm from '../searchForm';

type State = { isNavbarOpen: boolean };

const menu = [
  {
    id: 1,
    name: 'FOOTBALL',
    slug: '/',
    children: [
      { id: 2, name: 'shoes', slug: '/item/1' },
      { id: 3, name: 'clothing', slug: '/item/2' },
      { id: 4, name: 'accesories', slug: '/item/3' },
    ],
  },
  {
    id: 2,
    name: 'RUNNING',
    slug: '/running',
    children: [
      { id: 2, name: 'shoes', slug: '/item/4' },
      { id: 3, name: 'clothing', slug: '/item/5' },
      { id: 4, name: 'accesories', slug: '/item/6' },
    ],
  },
  {
    id: 3,
    name: 'BASKETBALL',
    slug: '/basketball',
    children: [
      { id: 2, name: 'shoes', slug: '/item/7' },
      { id: 3, name: 'clothing', slug: '/item/8' },
      { id: 4, name: 'accesories', slug: '/item/9' },
    ],
  },
];

class Sidebar extends Component<void, any, State> {
  constructor() {
    super();
    this.state = {
      isNavbarOpen: window.innerWidth >= 768,
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }
  state: State;
  toggleNavbar: Function;
  toggleNavbar() {
    // eslint-disable-next-line arrow-body-style
    this.setState((prevState): State => ({
      isNavbarOpen: !prevState.isNavbarOpen,
    }));
  }
  render() {
    const { isNavbarOpen } = this.state;
    const navbarState = isNavbarOpen ? 'block' : 'none';
    return (
      <div>
        <LogoLayout>
          <Link to="/"> <Logo name="logo" /> </Link>
        </LogoLayout>
        <MobileTogglerNav>
          <MenuToggle aria-label="Открыть меню" onClick={this.toggleNavbar}>
            <MenuToggleBox>
              <MenuToggleInnder />
            </MenuToggleBox>
          </MenuToggle>
        </MobileTogglerNav>
        <NavbarLayout style={{ display: navbarState }}>
          <SearchLayout>
            <SearchForm />
          </SearchLayout>
          {menu.map((nav, key) => {
            // eslint-disable-next-line react/no-array-index-key
            return <Navbar key={key} nav={nav} />;
          })}
        </NavbarLayout>
      </div>
    );
  }
}

export default Sidebar;
