// @flow
import React from 'react';
import { Row } from 'react-flexbox-grid';
import { ColorButton, TitleLayout, Title, Badge } from './styled-component';

type Props = {
  name: string,
};

const ItemHeader = ({ name }: Props) => {
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

export default ItemHeader;
