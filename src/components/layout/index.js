import React from 'react';
import { element } from 'prop-types';
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
  children: element.isRequired,
};

export default Layout;
