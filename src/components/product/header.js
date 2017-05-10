import React from 'react';
import { string } from 'prop-types';
import { ColorButton, Title } from './styled-component';
import Label from '../../components/label';

const ItemHeader = ({ name }) => {
  return (
    <div className="b-flex is-row is-between">
      <div className="b-item__h m-pos_relative">
        <Title role="heading">{name}</Title>
      </div>
      <div className="b-item__more b-flex is-end m-pos_relative">
        <div className="b-item__color">
          <ColorButton role="button" type="button" active color="red" />
          <ColorButton role="button" type="button" color="green" />
          <ColorButton role="button" type="button" color="yellow" />
          <ColorButton role="button" type="button" color="#4d87ca" />
        </div>
        <div className="b-item__badge m-bage__sale">
          <Label name="save" />
        </div>
      </div>
    </div>
  );
};

ItemHeader.propTypes = {
  name: string.isRequired,
};

export default ItemHeader;
