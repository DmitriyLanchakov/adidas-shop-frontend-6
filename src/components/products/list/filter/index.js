import React from 'react';
import { Row } from 'react-flexbox-grid';

import {
  Elements, Button, FilterIcon,
  ToggleFilter, FilterLayout,
} from './styled-component';

const CatalogFilter = () => {
  return (
    <FilterLayout action="#" method="get" role="search">
      <Row start="xs">
        <Elements>
          <ToggleFilter aria-label="Тогл фильтра" role="button" type="button">
            <FilterIcon />
          </ToggleFilter>
        </Elements>
        <Row start="xs">
          <Elements role="listbox">
            <Button role="button" type="button" active >women</Button>
            <Button role="button" type="button">men</Button>
          </Elements>
          <Elements role="listbox">
            <span>size </span>
            <Button role="button" type="button">37</Button>
            <Button role="button" type="button">38</Button>
            <Button role="button" type="button">39</Button>
            <Button role="button" type="button" active>40</Button>
            <Button role="button" type="button">41</Button>
            <Button role="button" type="button">42</Button>
          </Elements>
        </Row>
      </Row>
    </FilterLayout>
  );
};

export default CatalogFilter;
