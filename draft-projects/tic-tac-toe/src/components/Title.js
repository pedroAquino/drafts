import React from 'react';

const Title = ({ 
  children, 
  tag = 'h1' 
} = {}) => {
  const tags = {
    'h1': <h1>{children}</h1>,
    'h2': <h2>{children}</h2>,
    'h3': <h3>{children}</h3>
  };

  return tags[tag];
};

export default Title;