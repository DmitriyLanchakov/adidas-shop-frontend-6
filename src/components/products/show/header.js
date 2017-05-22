// @flow
import React, { Component } from 'react';
import { Row } from 'react-flexbox-grid';
import {
  ColorButton, TitleLayout, InfoGroup,
  Title, Badge, Price, Label,
} from './styled-component';

type Props = {
  name: string,
  dataColors: Object,
  price: number,
};
type State = {
  activeColor?: string,
}

class ItemHeader extends Component<void, Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
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
    const { name, dataColors, price } = this.props;
    const { activeColor } = this.state;
    return (
      <div>
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
              <Badge>sale</Badge>
            </Row>
            <Price money="before" color={activeColor}>{price}</Price>
          </InfoGroup>
        </Row>
        <Row start="xs">
          <Label color={activeColor}>save</Label>
        </Row>
      </div>
    );
  }
}
export default ItemHeader;
