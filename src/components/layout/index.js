import React from 'react';
import { array } from 'prop-types';
import Sidebar from '../sidebar';


const Layout = ({ children }) => {
  return (
    <div
      className="b-container b-flex is-row is-row_nowrap is-between is-stretch"
    >
      <aside className="col-s-12"><Sidebar /></aside>
      <section className="col-s-12">
        {children}
      </section>
    </div>
  );
};

Layout.propTypes = {
  children: array.isRequired,
};

export default Layout;
