import React from 'react';
import {Link} from 'react-router-dom';
import './StarshipPage.css';

function StarshipPage({location}) {
    const starship = location.state;
    return (
        <div className='starship-container'>
            <h3>Name: {starship.name}</h3>
            <h3>Model: {starship.model}</h3>
            <Link to="/" className="link">Return</Link>
        </div>
    )
}

export default StarshipPage;