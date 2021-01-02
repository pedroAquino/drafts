import React from 'react';

const CalcDisplay = ({ text }) => (
  <div className="calc__display">
    <div className="calc__display-text">
      {text}
    </div>
  </div>
);

export default CalcDisplay;