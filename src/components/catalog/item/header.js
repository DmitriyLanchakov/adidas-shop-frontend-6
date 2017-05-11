import React from 'react';
import { string } from 'prop-types';
import { ColorButton, TitleLayout, Title, Badge } from './styled-component';
import Flexbox from '../../../styled-components/flexbox';

const ItemHeader = ({ name }) => {
  return (
    <Flexbox flow="row wrap" justify="space-between">
      <TitleLayout>
        <Title role="heading">{name}</Title>
      </TitleLayout>
      <Flexbox justify="flex-end" className="b-item__more">
        <div>
          <ColorButton role="button" type="button" color="red" active />
          <ColorButton role="button" type="button" color="green" />
          <ColorButton role="button" type="button" color="yellow" />
          <ColorButton role="button" type="button" color="#4d87ca" />
        </div>
        <Badge>save</Badge>
      </Flexbox>
    </Flexbox>
  );
};

ItemHeader.propTypes = {
  name: string.isRequired,
};

export default ItemHeader;
