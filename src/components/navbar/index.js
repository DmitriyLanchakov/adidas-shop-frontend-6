import React, { Component } from 'react';
import { NavbarLayout, NavbarLink } from './styled-component';

type Props = { nav: Object }
type State = {
  isParentNavActive: boolean,
  isSubnavOpen: boolean,
}
class Navbar extends Component<void, Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isSubnavOpen: false,
      isParentNavActive: false,
    };
    this.toggleSubnav = this.toggleSubnav.bind(this);
  }
  toggleSubnav() {
    // eslint-disable-next-line arrow-body-style
    this.setState(prevState => ({
      isSubnavOpen: !prevState.isSubnavOpen,
      isParentNavActive: !prevState.isParentNavActive,
    }));
  }
  render() {
    const { nav } = this.props;
    const { isSubnavOpen, isParentNavActive } = this.state;
    return (
      <NavbarLayout role="navigation" aria-label="меню">
        <div key={nav.id}>
          <NavbarLink
            to={nav.children ? '#' : nav.slug}
            hasSubnav={!!nav.children}
            isOpen={isParentNavActive}
            onClick={this.toggleSubnav}
            role="menuitem"
            activeClassName={nav.children ? '' : 'is-active'}
          >{nav.name}</NavbarLink>
          {(nav.children && isSubnavOpen) && <NavbarLayout
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
      </NavbarLayout>
    );
  }
}

export default Navbar;
