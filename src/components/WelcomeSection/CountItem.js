import React from 'react';
import { number, string } from 'prop-types';
import { styWrapperCount } from './styles';

function CountItem({ number, text }) {
  return (
    <div css={styWrapperCount}>
      <h2>{number}</h2>
      <h3>{text}</h3>
    </div>
  );
}

CountItem.propTypes = {
  number: number.isRequired,
  text: string.isRequired,
};

export default React.memo(CountItem);
