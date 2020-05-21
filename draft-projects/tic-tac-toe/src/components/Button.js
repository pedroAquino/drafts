import React from 'react';

const Button = ({ children }) => {
  return <input type="button" className="button" value={children} />
};

export default Button;