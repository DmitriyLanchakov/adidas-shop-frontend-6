import React from 'react';
import { string } from 'prop-types';
import { Row } from 'react-flexbox-grid';
import { ColorButton, TitleLayout, Title, Badge } from './styled-component';

const ItemHeader = ({ name }) => {
  return (
    <Row between="xs">
      <TitleLayout>
        <Title role="heading">{name}</Title>
      </TitleLayout>
      <Row end="xs" middle="xs">
        <div>
          <ColorButton role="button" type="button" color="red" isActive />
          <ColorButton role="button" type="button" color="green" />
          <ColorButton role="button" type="button" color="yellow" />
          <ColorButton role="button" type="button" color="#4d87ca" />
        </div>
        <Badge>save</Badge>
      </Row>
    </Row>
  );
};

ItemHeader.propTypes = {
  name: string.isRequired,
};

export default ItemHeader;
