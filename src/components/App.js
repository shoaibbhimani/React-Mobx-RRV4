import React, { Component } from 'react';
import { inject, observer  } from 'mobx-react'
import { Route, withRouter } from 'react-router-dom'

//Component
import Header from './Header'
import RecipesList from './RecipeList'
import AddRecipe from './AddEditRecipe'
import RecipesListItem from './RecipesListItem';

import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div >
          <img src={logo} className="App-logo" alt="logo" />
           <Header />
        </div>
        <Route exact path="/recipes" component={RecipesList} />
        <Route path="/recipes/:id" component={RecipesListItem} />
        <Route exact path="/addnew" render={() => {
          return <AddRecipe addRecipe={true} />
        }} />
      </div>
    );
  }
}

export default inject(['recipeStore'])(withRouter(observer(App)));

