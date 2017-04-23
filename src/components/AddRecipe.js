import React, { Component } from 'react';
import { inject, observer  } from 'mobx-react'

class AddRecipe extends Component {
    constructor(){
        super();
        this.addNewRecipe = this.addNewRecipe.bind(this)
    }
    addNewRecipe(evt){
        (evt) && (evt.preventDefault());
        const { recipeStore } = this.props;
        recipeStore.addRecipe({
            name: this.refs.name.value,
            desc: this.refs.desc.value
        });
        this.refs.name.value = '';
        this.refs.desc.value = '';
    }
    render(){
        return (
            <section>
                <form className="form-horizontal" onSubmit={this.addNewRecipe}>
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                            <input ref="name" type="text" className="form-control" id="inputEmail3" placeholder="Enter Header" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
                        <div className="col-sm-10">
                            <input ref="desc" type="text" className="form-control" id="inputPassword3" placeholder="Enter Text Content" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default">
                                Add New Recipe
                            </button>
                        </div>
                    </div>
                </form>


            </section>
        )
    }
}

export default inject(['recipeStore'])(observer(AddRecipe));
