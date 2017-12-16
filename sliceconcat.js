//create a function remove.
function remove(array, index) {
  return array.slice(0,index).concat((array.slice(index +1)));
}
var arr = ['a','b','c','d','e','f'];
console.log(remove(arr,2));
