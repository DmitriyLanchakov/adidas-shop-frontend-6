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
  colors: Object,
  price: number,
}

class ItemHeader extends Component<void, Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: props.name,
      colors: props.colors,
      price: props.price,
      activeColor: '',
    };
    this.changeColor = this.changeColor.bind(this);
  }
  state: State;
  changeColor: Function;
  changeColor(e: Object) {
    this.setState({
      activeColor: e.target.getAttribute('color'),
    });
  }
  render() {
    const { name, colors, price, activeColor } = this.state;
    return (
      <Row between="xs">
        <TitleLayout>
          <Title role="heading">{name}</Title>
        </TitleLayout>
        <InfoGroup>
          <Row start="sm" middle="xs">
            {colors.map((e, key) => {
              const active = `${e === activeColor ? 'is' : 'no'}-active`;
              return (
                <ColorButton
                  // eslint-disable-next-line react/no-array-index-key
                  key={key}
                  role="button"
                  type="button"
                  className={active}
                  onClick={this.changeColor}
                  color={e}
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
