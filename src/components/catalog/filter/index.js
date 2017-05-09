import React from 'react';

const CatalogFilter = () => {
  return (
    <form action="#" method="get" role="search">
      <div className="b-filter b-flex is-row is-start">
        <div className="b-filter__element">
          <button aria-label="Тогл фильтра" role="button" type="button" className="bg-icon_filter">
            <span className="icon-filter">&nbsp;</span>
          </button>
        </div>
        <div className="b-flex is-row is-start b-filterArray is-show">
          <div className="b-filter__element" role="listbox">
            <button type="button" name="button" className="is-active">women</button>
            <button type="button" name="button">men</button>
          </div>
          <div className="b-filter__element" role="listbox">
            <span>size </span>
            <button type="button" name="button">37</button>
            <button type="button" name="button">38</button>
            <button type="button" name="button">39</button>
            <button type="button" name="button" className="is-active">40</button>
            <button type="button" name="button">41</button>
            <button type="button" name="button">42</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CatalogFilter;
