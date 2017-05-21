// @flow
import React, { Component } from 'react';
import { Row } from 'react-flexbox-grid';
import {
  ColorButton, TitleLayout, InfoGroup,
  Title, Badge, Price,
} from './styled-component';

type Props = {
  name: string,
  colors: Object,
  price: number,
};
type State = {
  name: string,
  activeColor?: string,
  dataColors: Object,
  price: number,
}

class ItemHeader extends Component<void, Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: props.name,
      dataColors: props.colors,
      price: props.price,
      activeColor: '',
    };
    this.changeColor = this.changeColor.bind(this);
  }
  state: State;
  changeColor: Function;
  changeColor(color: string) {
    this.setState({ activeColor: color });
  }
  render() {
    const { name, dataColors, price, activeColor } = this.state;
    return (
      <Row between="xs">
        <TitleLayout>
          <Title role="heading">{name}</Title>
        </TitleLayout>
        <InfoGroup>
          <Row start="sm" middle="xs">
            {dataColors.map((color, key) => {
              return (
                <ColorButton
                  // eslint-disable-next-line react/no-array-index-key
                  key={key}
                  role="button"
                  type="button"
                  isActive={color === activeColor}
                  onClick={() => { return this.changeColor(color); }}
                  color={color}
                />
              );
            })}
            <Badge color={activeColor}>save</Badge>
          </Row>
          <Price money="before" color={activeColor}>{price}</Price>
        </InfoGroup>
      </Row>
    );
  }
}
export default ItemHeader;
