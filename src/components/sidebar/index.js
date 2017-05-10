import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <div className="b-sidebar__logo">
          <Link to="/"> <Logo name="logo" /> </Link>
        </div>
        <div className="is-mobile">
          <button
            aria-label="Открыть меню"
            onClick={this.toggleNavbar}
          >
            <span className="menu icon" />
          </button>
        </div>
        <div className="b-sectionNav" style={{ display: navbarState }}>
          <div className="b-sidebar__search">
            <SearchForm />
          </div>
          <Navbar />
        </div>
      </div>
    );
  }
}

export default Sidebar;
