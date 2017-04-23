import React, { Component } from 'react';
import { inject, observer  } from 'mobx-react'

class RecipeList extends Component {
    render(){
        const { recipeStore } = this.props;
        return (
            <ul className="list-group">
                {
                    recipeStore.getRecipes.map((recipeStoreItem, index) =>  <li key={index} className="list-group-item">{recipeStoreItem.name}</li>)
                }


            </ul>
        )
    }
}

export default inject(['recipeStore'])(observer(RecipeList));
