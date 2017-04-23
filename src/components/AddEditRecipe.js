import React, { Component } from 'react';
import { inject, observer  } from 'mobx-react'

class AddEditRecipe extends Component {
    constructor(){
        super();
        this.addNewRecipe = this.addNewRecipe.bind(this)
    }
    addNewRecipe(evt){
        (evt) && (evt.preventDefault());
        const { recipeStore } = this.props;
        if(recipeStore.getActiveRecipe){
            recipeStore.editRecipe({
                name: this.refs.name.value,
                desc: this.refs.desc.value,
                index:recipeStore.getActiveRecipe.index
            });
        } else {
          recipeStore.addRecipe({
            name: this.refs.name.value,
            desc: this.refs.desc.value
          });
          this.refs.name.value = '';
          this.refs.desc.value = '';
        }

    }
    render(){
        const { recipeStore } = this.props;
        return (
            <section>
                <form className="form-horizontal" onSubmit={this.addNewRecipe}>
                    <div className="form-group">
                        <label htmlFor="inputEmail3"

                               className="col-sm-2 control-label">
                            Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                defaultValue={recipeStore.getActiveRecipe ? recipeStore.getActiveRecipe.name : '' }
                                ref="name" type="text" className="form-control" id="inputEmail3" placeholder="Enter Name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">Description</label>
                        <div className="col-sm-10">
                            <input
                                ref="desc"
                                type="text"
                                defaultValue={recipeStore.getActiveRecipe ? recipeStore.getActiveRecipe.desc : '' }
                                className="form-control"
                                id="inputPassword3"
                                placeholder="Enter Text Content" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default">
                                {  recipeStore.getActiveRecipe ? 'Edit Recipe' : 'Add New Recipe' }
                            </button>
                        </div>
                    </div>
                </form>


            </section>
        )
    }
}

export default inject(['recipeStore'])(observer(AddEditRecipe));
