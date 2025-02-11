import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Keypad from './components/Keypad';

function App() {
  const [value, setValue] = useState('');

  const handleClick = (val) => {
    if (val === 'AC') {
      setValue('');
    } else if (val === 'DE') {
      setValue(value.slice(0, -1));
    } else if (val === '=') {
      try {
        if (value.includes('/0')) {
          setValue('Error: Div by 0');
        } else {
          setValue(eval(value).toString());
        }
      } catch (e) {
        setValue('Error');
      }
    } else {
      setValue(value + val);
    }
  };


  return (
    <div className="container">
      <h5 className="title">HEA SIMPLE CALCULATOR...</h5>
      <div className="calculator">
        <Display value={value} />
        <Keypad handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;

