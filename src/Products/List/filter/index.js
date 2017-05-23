import React from 'react';
import { Row } from 'react-flexbox-grid';
import {
  Elements, Button, FilterIcon,
  ToggleFilter, FilterLayout, Name,
} from './styled-component';

type Props = {
  onChange: Function,
}

const filters: Object = [
  {
    id: 1, name: null, label: 'gender', values: ['Women', 'Men'],
  },
  {
    id: 2, name: 'size', label: 'size', values: [37, 38, 39, 40, 41],
  },
];
// onChange
const CatalogFilter = ({ onChange }: Props) => {
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
                {fi.values.map(ob => {
                  return (
                    <Button
                      key={ob}
                      type="button"
                      onClick={() => {
                        return onChange({ label: fi.label, value: ob });
                      }}
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
