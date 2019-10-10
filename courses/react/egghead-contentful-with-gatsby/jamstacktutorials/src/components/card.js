import React from 'react';
import { Link } from "gatsby"

export default ({ title, image, slug }) => (
    <div>
        <Link to={`/lessons/${slug}`}>
            <h3>{title}</h3>
        </Link>
        <img src={image} />
    </div>
);