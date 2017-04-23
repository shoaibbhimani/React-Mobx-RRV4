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
      recipes:[{ name: "Chicken Biryani", desc:"Best Food in the World" }],
      activeRecipe:null,
      get getActiveRecipe(){
        return this.activeRecipe;
      },
      get getRecipes(){
        return this.recipes;
      },
      addRecipe:action(({ name, desc }) => {
        let item = { name, desc };
        this.recipes.replace(UtilityMethods.addItemToList({
          list:this.recipes,
          item
        }));
      }),
      deleteRecipe:action((index) => {
        this.recipes.replace(UtilityMethods.removeItemFromList({
          list:this.recipes,
          index
        }));
      }),
      editRecipe:action(({ name, desc, index }) => {
        let recipes = this.recipes.slice();
        let editRecipe = recipes[index];
        editRecipe.name = name;
        editRecipe.desc = desc;
        this.recipes.replace(recipes);
        this.activeRecipe = null;
      }),
      toggleActiveRecipe:action((index) => {
        let activeRecipe = this.recipes[index];
        activeRecipe['index'] = index;
        this.activeRecipe = activeRecipe;
      })
    })
  }
}

export default remotedev(new RecipeStore());

