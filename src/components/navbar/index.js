import React, { Component } from 'react';
import { NavbarLayout, NavbarLink } from './styled-component';

type Props = {
  menuData: Object,
}
type State = {
  nav: {
    id: number,
    name: string,
    slug: string,
    children: Object,
  },
  isParentNavActive: boolean,
  isSubnavOpen: boolean,
}
class Navbar extends Component<void, Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isSubnavOpen: false,
      isParentNavActive: false,
      nav: props.menuData,
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
    const { nav, isSubnavOpen, isParentNavActive } = this.state;
    return (
      <NavbarLayout role="navigation" aria-label="меню">
        <div key={nav.id}>
          <NavbarLink
            to={nav.slug}
            hasSubnav={!!nav.children}
            isOpen={isParentNavActive}
            onClick={this.toggleSubnav}
            role="menuitem"
            activeClassName="is-active"
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
