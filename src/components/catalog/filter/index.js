import React from 'react';
import Flexbox from '../../../styled-components/flexbox';
import {
  FilterElement, FilterButton, FilterIcon,
  FilterToggleButton, FilterLayout,
} from './styled-component';

const CatalogFilter = () => {
  return (
    <FilterLayout action="#" method="get" role="search">
      <Flexbox flow="row wrap" justify="flex-start">
        <FilterElement>
          <FilterToggleButton aria-label="Тогл фильтра" role="button" type="button">
            <FilterIcon />
          </FilterToggleButton>
        </FilterElement>
        <Flexbox
          flow="row wrap" justify="flex-start"
          className="b-filterArray is-show"
        >
          <FilterElement role="listbox">
            <FilterButton role="button" type="button" active >women</FilterButton>
            <FilterButton role="button" type="button">men</FilterButton>
          </FilterElement>
          <FilterElement role="listbox">
            <span>size </span>
            <FilterButton role="button" type="button">37</FilterButton>
            <FilterButton role="button" type="button">38</FilterButton>
            <FilterButton role="button" type="button">39</FilterButton>
            <FilterButton role="button" type="button" active>40</FilterButton>
            <FilterButton role="button" type="button">41</FilterButton>
            <FilterButton role="button" type="button">42</FilterButton>
          </FilterElement>
        </Flexbox>
      </Flexbox>
    </FilterLayout>
  );
};

export default CatalogFilter;
