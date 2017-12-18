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

// Lists Exercise
function arrayToList(array) {
  var list = {value: array[array.length-1], rest:null};
  for (var i = array.length-1-1; i >= 0; i--) {
    var temp = list;
    list = {value: array[i], rest:temp};
  }
  return list;
}
// console.log(arrayToList([1,2,3,4,5]));

function listToArray(list) {
  var list = list;
  var arr = [];
  for (var node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

// console.log(listToArray(arrayToList([1,2,3,4,5])));

function prepend(element,list) {
  var newList = { value:element, rest:list }
  return newList;
}

// console.log(prepend(10,list));

function nth(list,nthNumber) {
  var arr = [];
  for (var node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr[nthNumber];
}
// var list = arrayToList([1,2,3,4,5]);
// console.log(nth(list,1));

function deepEqual(obj1,obj2) {
  var temp1 = [], temp2 = [];
  for (var i in obj1) {
    temp1.push(i);
  }
  for (var i in obj2) {
    temp2.push(i);
  }
  if (temp1.length == temp2.length) {
    var count = 0;
    for (var i = 0; i < temp1.length; i++) {
      if ((((typeof obj1[temp1[i]]) === (typeof obj2[temp2[i]])) && ((obj1[temp1[i]] == obj2[temp2[i]])))) {
        count += 1;
      }
    }
  }
  if (count == (temp1.length -1)) {
    return true;
  }
}
// var objz = {a:{},b:{},c:3}
// var obarr=[];
// for (var i in objz) {
//   obarr.push(i);
// }
// console.log(obarr);
// console.log(typeof (objz[obarr[0]]));
//
// console.log(objz[obarr[0]]);
