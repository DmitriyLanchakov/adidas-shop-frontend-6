import React from 'react';
import { Row } from 'react-flexbox-grid';
import {
  Elements, Button, FilterIcon,
  ToggleFilter, FilterLayout, Name,
} from './styled-component';

type Props = {
  filterChange: Function,
}

const filters: Object = [
  {
    id: 1, name: null, get: 'gender', obj: ['Women', 'Men'],
  },
  {
    id: 2, name: 'size', get: 'size', obj: [37, 38, 39, 40, 41],
  },
];

const CatalogFilter = ({ filterChange }: Props) => {
  return (
    <FilterLayout action="#" method="get" role="search">
      <Row start="xs">
        <Elements>
          <ToggleFilter aria-label="Тогл фильтра" role="button" type="button">
            <FilterIcon />
          </ToggleFilter>
        </Elements>
        <Row start="xs">
          {filters.map(fi => {
            return (
              <Elements role="listbox" key={fi.id}>
                {fi.name && <Name>{fi.name}</Name>}
                {fi.obj.map(ob => {
                  return (
                    <Button
                      key={ob}
                      role="button" type="button"
                      data-fname={fi.get} data-value={ob}
                      onClick={filterChange}
                    >{ob}</Button>
                  );
                })}
              </Elements>
            );
          })}
        </Row>
      </Row>
    </FilterLayout>
  );
};

export default CatalogFilter;
