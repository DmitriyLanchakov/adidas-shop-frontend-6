import React from 'react';
import { string } from 'prop-types';
import { ColorButton, Title, Badge } from './styled-component';
import Flexbox from '../../styled-components/flexbox';
import Label from '../../components/label';

const ItemHeader = ({ name }) => {
  return (
    <Flexbox flow="row wrap" justify="space-between">
      <div className="b-item__h m-pos_relative">
        <Title role="heading">{name}</Title>
      </div>
      <Flexbox justify="flex-end" className="b-item__more m-pos_relative">
        <div>
          <ColorButton role="button" type="button" color="red" active />
          <ColorButton role="button" type="button" color="green" />
          <ColorButton role="button" type="button" color="yellow" />
          <ColorButton role="button" type="button" color="#4d87ca" />
        </div>
        <Badge><Label name="save" /></Badge>
      </Flexbox>
    </Flexbox>
  );
};

ItemHeader.propTypes = {
  name: string.isRequired,
};

export default ItemHeader;
