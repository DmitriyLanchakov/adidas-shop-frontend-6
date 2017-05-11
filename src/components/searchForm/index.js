import React from 'react';
import {
  Input, Button, SearchIcon,
} from './styled-component';

const SearchForm = () => {
  return (
    <form action="/" method="GET" role="search">
      <Button type="submit">
        <SearchIcon />
      </Button>
      <Input type="search" />
    </form>
  );
};

export default SearchForm;
