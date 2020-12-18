import React from 'react';
import './recipe.css';

const recipe = (props) => {
    // var list = props.ingredients;
    return (
        <div className="Recipe">
            <h3>{props.name}</h3>
        </div>
    )
}

export default recipe;