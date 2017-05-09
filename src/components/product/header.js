import React from 'react';
import { string } from 'prop-types';

const ItemHeader = ({ name }) => {
  return (
    <div className="b-flex is-row is-between">
      <div className="b-item__h m-pos_relative">
        <h1 role="heading" className="m-uppercase">{name}</h1>
      </div>
      <div className="b-item__more b-flex is-end m-pos_relative">
        <div className="b-item__color">
          <button role="button" type="button" style={{ backgroundColor: '#4d87ca' }}>&nbsp;</button>
          <button role="button" type="button" style={{ backgroundColor: '#e0e0e0' }}>&nbsp;</button>
          <button role="button" type="button" style={{ backgroundColor: 'green' }}>&nbsp;</button>
          <button role="button" type="button" style={{ backgroundColor: 'yellow' }}>&nbsp;</button>
        </div>
        <div className="b-item__badge m-bage__sale"><span>sale</span></div>
      </div>
    </div>
  );
};

ItemHeader.propTypes = {
  name: string.isRequired,
};

export default ItemHeader;
