import { extendObservable, action }  from 'mobx'
import remotedev from 'mobx-remotedev/lib'
import UtilityMethods from  '../UtilityMethods'

/**
 * Represents a Recipe.
 * @constructor
*/
class RecipeStore {
  constructor(){
    extendObservable(this,{
      recipes:[],
      get getRecipes(){
        return this.recipes;
      },
      addRecipe:action(({ name, desc }) => {
        let item = { name, desc };
        this.recipes.replace(UtilityMethods.addItemToList({
          list:this.recipes,
          item
        }));
      })
    })
  }
}

export default remotedev(new RecipeStore());

