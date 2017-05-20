// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  LogoLayout, MenuToggle,
  MobileTogglerNav, NavbarLayout,
  SearchLayout,
} from './styled-component';
import Logo from '../logo';
import Navbar from '../navbar';
import SearchForm from '../searchForm';

type State = {
  isNavbarOpen: boolean,
};

class Sidebar extends Component<void, any, State> {
  constructor() {
    super();
    this.state = {
      isNavbarOpen: window.innerWidth >= 768,
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.checkNavbar = this.checkNavbar.bind(this);
  }
  state: State;

  componentDidMount() {
    window.addEventListener('resize', this.checkNavbar, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkNavbar, false);
  }

  checkNavbar: Function;
  checkNavbar() {
    const { innerWidth } = window;
    const { isNavbarOpen } = this.state;

    if (innerWidth <= 768 && isNavbarOpen === true) {
      this.setState({ isNavbarOpen: false });
    }
    if (innerWidth >= 768 && isNavbarOpen === false) {
      this.setState({ isNavbarOpen: true });
    }
  }
  toggleNavbar: Function;
  toggleNavbar(e: Object) {
    e.target.closest('button').classList.toggle('is-active');
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
            <span className="box">
              <span className="inner" />
            </span>
          </MenuToggle>
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
