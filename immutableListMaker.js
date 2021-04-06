const listMaker = (orig, add, remove) => {
  let newList = orig;
  
  //adds each elementh in add array if it doesn't exist in orig array
  add.forEach(element => {
     if (!orig.includes(element)) newList.push(element);
  });
  
  //for each word in newList if its not in the remove array it is returned
  const result = newList.filter(word => !remove.includes(word));
  
  result.reverse(); //sorts reverse alphabetically then by length below
  result.sort((a,b) => b.length - a.length);
  
  return result;
}
const originalList = ["one", "two", "three"];
const addList = ["one", "two", "five", "six"];
const deleteList = ["two", "five"];
console.log(listMaker(originalList, addList, deleteList));