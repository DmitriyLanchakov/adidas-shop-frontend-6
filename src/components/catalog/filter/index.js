import React from 'react';
import Flexbox from '../../../styled-components/flexbox';
import { FilterElement, FilterButton } from './styled-component';

const CatalogFilter = () => {
  return (
    <form action="#" method="get" role="search">
      <Flexbox flow="row wrap" justify="flex-start" className="b-filter">
        <FilterElement>
          <button aria-label="Тогл фильтра" role="button" type="button" className="bg-icon_filter">
            <span className="icon-filter">&nbsp;</span>
          </button>
        </FilterElement>
        <div className="b-flex is-row is-start b-filterArray is-show">
          <FilterElement role="listbox">
            <FilterButton role="button" type="button" active >women</FilterButton>
            <FilterButton role="button" type="button">men</FilterButton>
          </FilterElement>
          <div className="b-filter__element" role="listbox">
            <span>size </span>
            <FilterButton role="button" type="button">37</FilterButton>
            <FilterButton role="button" type="button">38</FilterButton>
            <FilterButton role="button" type="button">39</FilterButton>
            <FilterButton role="button" type="button" active>40</FilterButton>
            <FilterButton role="button" type="button">41</FilterButton>
            <FilterButton role="button" type="button">42</FilterButton>
          </div>
        </div>
      </Flexbox>
    </form>
  );
};

export default CatalogFilter;
