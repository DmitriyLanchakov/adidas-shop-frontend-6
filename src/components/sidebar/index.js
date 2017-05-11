import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  LogoLayout, MenuIcon,
  MobileTogglerNav, NavbarLayout,
  SearchLayout,
} from './styled-component';
import Logo from '../logo';
import Navbar from '../navbar';
import SearchForm from '../searchForm';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      navbarOpen: window.innerWidth >= 768,
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }
  toggleNavbar() {
    this.setState(prevState => ({// eslint-disable-line
      navbarOpen: !prevState.navbarOpen,
    }));
  }
  render() {
    const { navbarOpen } = this.state;
    const navbarState = navbarOpen ? 'block' : 'none';
    return (
      <div>
        <LogoLayout>
          <Link to="/"> <Logo name="logo" /> </Link>
        </LogoLayout>
        <MobileTogglerNav>
          <button aria-label="Открыть меню" onClick={this.toggleNavbar}>
            <MenuIcon />
          </button>
        </MobileTogglerNav>
        <NavbarLayout style={{ display: navbarState }}>
          <SearchLayout>
            <SearchForm />
          </SearchLayout>
          <Navbar />
        </NavbarLayout>
      </div>
    );
  }
}

export default Sidebar;
