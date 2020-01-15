import React from 'react';
import {Link} from 'react-router-dom';

function StarshipPage({location}) {
    const starship = location.state;
    return (
        <div>
            <h3>Name: {starship.name}</h3>
            <h3>Model: {starship.model}</h3>
            <Link to="/">Return</Link>
        </div>
    )
}

export default StarshipPage;