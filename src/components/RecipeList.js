import React, { Component } from 'react';
import { inject, observer  } from 'mobx-react'

import { NavLink } from 'react-router-dom'

import AddEditRecipe from './AddEditRecipe'



class RecipeList extends Component {
    render(){
        const { recipeStore } = this.props;
        return (
            <section>
            <ul className="list-group">
                {
                    recipeStore.getRecipes.map((recipeStoreItem, index) => {
                     return   (
                         <li
                           key={index}
                           className="list-group-item">
                             <NavLink to={`/recipes/${index}`}> {recipeStoreItem.name} </NavLink>
                             <button onClick={() => recipeStore.deleteRecipe(index) }>
                               Delete
                             </button>
                             <button onClick={() => recipeStore.toggleActiveRecipe(index) }>
                                 Edit
                             </button>
                         </li>
                     )
                    })
                }


            </ul>
             <section>
                 {recipeStore.getActiveRecipe ? <AddEditRecipe /> : null }
             </section>
            </section>
        )
    }
}

export default inject(['recipeStore'])(observer(RecipeList));
