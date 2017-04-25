import React from 'react';
import ReactDOM from 'react-dom';
import UtilityMethod from './UtilityMethods';

describe("TodoList", function() {
  //don't use an arrow function...preserve the value of "this"
  beforeEach(function() {
    this.store = {
      recipeStore: [
        { name: "todo1", id: 111, desc: "This is Test #1" },
        { name: "todo2", id: 222, desc: "This is Test #2" },
        { name: "todo3", id: 333, desc: "This is Test #3" },
      ],
      createTodo: (val) => {
        this.createTodoCalled = true
        this.todoValue = val
      },
    }
  })

  //tests will go here and receive this.store
  it('Add Data to List', function(){
   let result = UtilityMethod.addItemToList({ list:this.store.recipeStore, item: { name:"todo4", desc: "This is Test #4" }});
   let expected = this.store.recipeStore.concat({ name:"todo4", desc: "This is Test #4" });	
   expect(result).toEqual(expected)
   
  });
  
  it('Remove Data to List', function(){
   let result = UtilityMethod.removeItemFromList({ list:this.store.recipeStore, index: 2});
   let expected = [
      { name: "todo1", id: 111, desc: "This is Test #1" },
      { name: "todo2", id: 222, desc: "This is Test #2" },
    ]
   expect(result).toEqual(expected)
   
  });

  it('Edit Data to List', function(){
   let result = UtilityMethod.editDataFromList({ list: this.store.recipeStore, index: 2});
   let expected = [
      { name: "todo1", id: 111, desc: "This is Test #1" },
      { name: "todo2", id: 222, desc: "This is Test #2" },
    ]
   expect(result).toEqual(expected)
   
  });

})

