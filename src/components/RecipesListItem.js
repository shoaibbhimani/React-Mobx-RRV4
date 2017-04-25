import React from 'react'
import { inject, observer } from 'mobx-react'
import { NavLink  } from 'react-router-dom'

class RecipesListItem extends React.Component {
    render(){
        const { recipeStore, match } = this.props;
        return (
            <div className="row">
                <div className="col-sm-4">
                    <ul className="list-group">
                        {
                            recipeStore.getRecipes.map((recipeItem, index) => {
                                return <li  key={index} className="list-group-item">
                                    <NavLink 
                                      activeClassName="active"
                                      to={`/recipes/${index}`}>
                                        {recipeItem.name}
                                    </NavLink>
                                 </li>
                            })
                        }
                    </ul>
                </div>
                <div className="col-sm-8">
                    <h2>{ recipeStore.getRecipes[match.params.id].name }</h2>
                    <div>{ recipeStore.getRecipes[match.params.id].desc   }</div>
                    {this.props.match.params.id}
                </div>
            </div>
        )
    }

}

export default inject(['recipeStore'])(observer(RecipesListItem));