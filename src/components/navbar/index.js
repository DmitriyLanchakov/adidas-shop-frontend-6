import React from 'react';

const Navbar = () => {
  return (
    <ul role="navigation" aria-label="меню">
      <li role="menuitem">
        <a href="/" className="has-subnav is-active">sports</a>
        <ul className="is-active">
          <li role="menuitem">
            <a href="/" className="is-active">shoes</a>
          </li>
          <li role="menuitem">
            <a href="/">clothing</a>
          </li>
          <li role="menuitem">
            <a href="/">accesories</a>
          </li>
        </ul>
      </li>
      <li role="menuitem">
        <a href="/">brand</a>
      </li>
      <li role="menuitem">
        <a href="/">micoach</a>
      </li>
    </ul>
  );
};

export default Navbar;
