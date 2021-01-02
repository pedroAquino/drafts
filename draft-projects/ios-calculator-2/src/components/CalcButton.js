import React from 'react';

const CalcButton = ({ text, className, onClick }) => (
  <div className={`calc__button ${className}`}>
    <button onClick={() => onClick(text)} >{text}</button>
  </div>
);

export default CalcButton;