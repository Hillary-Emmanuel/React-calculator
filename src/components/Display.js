import React from 'react';

function formatNumber(value) {
  // Convert the number to a string and format with underscores
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '_');
}

function Display({ value }) {
  return (
    <div className='display'>
      <input type='text' value={formatNumber(value)} readOnly />
    </div>
  );
}

export default Display;
