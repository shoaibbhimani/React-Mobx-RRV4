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

export default {
  addItemToList
}