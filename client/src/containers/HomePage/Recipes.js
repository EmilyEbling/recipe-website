import React, { Component } from 'react'
import Recipe from '../../components/recipe/Recipe'
import axios from 'axios';

class Recipes extends Component {
    state = {
        recipes: []
    }

    componentDidMount() {
        this.getRecipes();
    }

    getRecipes = _ => {
        axios.get('http://localhost:3001/')
            .then((data) => {
                console.log(data.data.recipes);
                this.setState({ recipes: data.data.recipes });
            })
            .catch(error => console.log(error));
    }

    showRecipes = recipe => 
    <div key={recipe.idrecipe}>
        <Recipe name={recipe.recipe_name}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}/>
    </div>
    render() {
        const { recipes } = this.state;
        return (
            <div>
                {recipes.map(this.showRecipes)}
            </div>
        )
    }
}

export default Recipes;
