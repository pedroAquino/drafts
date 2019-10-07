import React from 'react';

export default ({ title, image }) => (
    <div>
        <h3>{title}</h3>
        <img src={image} />
    </div>
);