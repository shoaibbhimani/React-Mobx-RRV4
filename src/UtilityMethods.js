const isArray = ({ list }) => {
  if(!Array.isArray(list.slice())){
    console.error("It is not an Array");
    return []
   }
}

/**
 * Add Data to a List.
 * @param {string} list - List of Item you want to add item to.
 * @param {number} item - Item.
 */

const addItemToList = ({ list, item }) => {
   isArray({ list });
   return list.concat(item)
};

/**
 * Remove Data to a List.
 * @param {string} list - List of Item you want to add item to.
 * @param {number} index - index at which element is that is to be removed.
 */

const removeItemFromList = ({ list, index }) => {   
   isArray({ list });
   let newlist = list.slice();
   newlist.splice(index,1);
   return newlist;
};


/**
 * Edit data from a List.
 * @param {string} list - List of Item you want to add item to.
 * @param {number} index - index at which element is that is to be removed.
 * @param {*} newItem - Anytype we want to enter to Eexisting list Array
 */

const editDataFromList = ({ list, index, newItem }) => {
   isArray({ list })
   let cloneList = list.slice();
   cloneList[index] = newItem;
   return cloneList;
};


export default {
  addItemToList,
  removeItemFromList,
  editDataFromList, 
}

