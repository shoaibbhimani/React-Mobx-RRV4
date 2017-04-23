/**
 * Add Data to a List.
 * @param {string} list - List of Item you want to add item to.
 * @param {number} item - Item.
 */

const addItemToList = ({ list, item }) => {
   if(!Array.isArray(list.slice())){
    console.error("It is not an Array");
    return []
   }
   return list.concat(item)
};

/**
 * Remove Data to a List.
 * @param {string} list - List of Item you want to add item to.
 * @param {number} index - index at which element is that is to be removed.
 */

const removeItemFromList = ({ list, index }) => {
   if(!Array.isArray(list.slice())){
    console.error("It is not an Array");
    return []
   }
   let newlist = list.slice();
   newlist.splice(index,1);
   return newlist;
};

export default {
  addItemToList,
  removeItemFromList
}

