// sum of a range.
// console.log(sum(range(1, 10)));
function range(start,end) {
  var rangeArr = [];
  for (var i = start; i <= end; i++) {
    rangeArr.push(i);
  }
  return rangeArr;
}

function sum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(sum(range(1,10))); //55

// Reversing an array.
function reverseArray(array) {
  var finalArray = [];
  for (var i = array.length -1; i >= 0; i--) {
    finalArray.push(array[i]);
  }
  return finalArray;
}

function reverseInPlace(array) {
  for (var i = 0; i < Math.floor(array.length/2); i++) {
    var temp = array[i];
    array[i] = array[array.length-1-i];
    array[array.length-1-i] = temp;
  }
  return array;
}

// Lists
function arrayToList(array) {
  var list = {value: array[array.length-1], rest:null};
  for (var i = array.length-2; i >= 0; i--) {
    var temp = list;
    list = {value: array[i], rest:temp};
  }
  return list;
}
console.log(arrayToList([1,2,3,4,5]));

function listToArray() {

}
