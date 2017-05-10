import React from 'react';
import {
  SearchInput, SearchButton, SearchIconSearch,
} from './styled-component';

const SearchForm = () => {
  return (
    <form action="/" method="GET" role="search">
      <SearchButton type="submit">
        <SearchIconSearch />
      </SearchButton>
      <SearchInput type="search" />
    </form>
  );
};

export default SearchForm;
