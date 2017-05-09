import React from 'react';

const FormSearch = () => {
  return (
    <form action="/" method="GET" role="search">
      <button type="submit"><span className="icon-search">&nbsp;</span></button>
      <input type="search" />
    </form>
  );
};

export default FormSearch;
