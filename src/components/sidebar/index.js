import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  SidebarLogoLayout, MenuIcon,
  MobileTogglerNav, NavbarLayout,
  SearchLayout,
} from './styled-component';
import Logo from '../logo';
import Navbar from '../navbar';
import SearchForm from '../searchForm';

class Sidebar extends Component {
  constructor() {
    super();
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }
  state = {
    navbarOpen: window.innerWidth >= 768,
  }
  toggleNavbar() {
    this.setState({
      navbarOpen: !this.state.navbarOpen,
    });
  }
  render() {
    const { navbarOpen } = this.state;
    const navbarState = navbarOpen ? 'block' : 'none';
    return (
      <div className="b-sidebar m-text-center">
        <SidebarLogoLayout>
          <Link to="/"> <Logo name="logo" /> </Link>
        </SidebarLogoLayout>
        <MobileTogglerNav>
          <button
            aria-label="Открыть меню"
            onClick={this.toggleNavbar}
          >
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
