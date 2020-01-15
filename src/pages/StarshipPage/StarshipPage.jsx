import React from 'react';

function StarshipPage({location}) {
    const starship = location.state;
    return (
        <div>
            <h3>Name: {starship.name}</h3>
            <h3>Model: {starship.model}</h3>
        </div>
    )
}

export default StarshipPage;