import React from 'react';
import { SearchInput, SearchButton, SearchIconSearch } from './style';

const FormSearch = () => {
  return (
    <form action="/" method="GET" role="search">
      <SearchButton type="submit">
        <SearchIconSearch />
      </SearchButton>
      <SearchInput type="search" />
    </form>
  );
};

export default FormSearch;
