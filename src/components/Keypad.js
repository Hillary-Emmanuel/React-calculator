import React from 'react';

function Keypad({ handleClick }) {
  const buttons = [
    ['AC', 'DE', '.', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '-'],
    ['00', '0', '_','=']
  ];

  return (
    <div className='button'>
      {buttons.map((row, index) => (
        <div key={index}>
          {row.map((btn) => (
            <input 
              key={btn} 
              type="button" 
              value={btn} 
              onClick={() => handleClick(btn)} 
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keypad;
