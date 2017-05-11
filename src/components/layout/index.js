import React from 'react';
import { array } from 'prop-types';
import { Row } from 'react-flexbox-grid';
import Sidebar from '../sidebar';


const Layout = ({ children }) => {
  return (
    <Row className="is-nowrap">
      <aside><Sidebar /></aside>
      <section>{children}</section>
    </Row>
  );
};

Layout.propTypes = {
  children: array.isRequired,
};

export default Layout;
