import React from 'react';
import './Button.css';

const Button = ({ children }) => {
  return <input type="button" className="button" value={children} />
};

export default Button;