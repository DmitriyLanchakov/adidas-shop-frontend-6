import React from 'react';
import { FilterElement, FilterButton } from './style';

const CatalogFilter = () => {
  return (
    <form action="#" method="get" role="search">
      <div className="b-filter b-flex is-row is-start">
        <FilterElement>
          <button aria-label="Тогл фильтра" role="button" type="button" className="bg-icon_filter">
            <span className="icon-filter">&nbsp;</span>
          </button>
        </FilterElement>
        <div className="b-flex is-row is-start b-filterArray is-show">
          <FilterElement role="listbox">
            <FilterButton role="button" active >women</FilterButton>
            <FilterButton role="button">men</FilterButton>
          </FilterElement>
          <div className="b-filter__element" role="listbox">
            <span>size </span>
            <FilterButton type="button">37</FilterButton>
            <FilterButton type="button">38</FilterButton>
            <FilterButton type="button">39</FilterButton>
            <FilterButton type="button" active>40</FilterButton>
            <FilterButton type="button">41</FilterButton>
            <FilterButton type="button">42</FilterButton>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CatalogFilter;
