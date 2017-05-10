import React from 'react';
import { array } from 'prop-types';
import Flexbox from '../../styled-components/flexbox';
import Sidebar from '../sidebar';


const Layout = ({ children }) => {
  return (
    <Flexbox flow="row nowrap" justify="space-between" stretch className="b-container">
      <aside><Sidebar /></aside>
      <section>{children}</section>
    </Flexbox>
  );
};

Layout.propTypes = {
  children: array.isRequired,
};

export default Layout;
