// @flow
import React from 'react';
import { Row } from 'react-flexbox-grid';
import {
  ColorButton, TitleLayout, InfoGroup,
  Title, Badge, Price, Label,
} from './styled-component';

type Props = {
  name: string,
  colors: Object,
  price: number,
};

const Header = ({ name, colors, price }: Props) => {
  return (
    <div>
      <Row between="xs">
        <TitleLayout>
          <Title role="heading">{name}</Title>
        </TitleLayout>
        <InfoGroup>
          <Row start="sm" middle="xs">
            {colors.map((color, key) => {
              return (
                <ColorButton
                  // eslint-disable-next-line react/no-array-index-key
                  key={key}
                  role="button"
                  type="button"
                  color={color}
                />
              );
            })}
            <Badge>sale</Badge>
          </Row>
          <Price money="before" color={colors[0]}>{price}</Price>
        </InfoGroup>
      </Row>
      <Row start="xs">
        <Label color={colors[0]}>save</Label>
      </Row>
    </div>
  );
};
export default Header;
