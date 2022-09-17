//indexof
//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

//eg:1
const fruits = ["Banana", "Orange", "Apple", "Mango"];//array
console.log(fruits.indexOf("Apple"));//aApple index 2 output=2
console.log("new array");
const array = [2, 9, 9];
console.log(array.indexOf(9));//1
console.log(array.indexOf(2));//0
console.log(array.indexOf(9,2));//2
console.log(array.indexOf(9,3));//-1
console.log(array.indexOf(9,-1));//2
console.log(array.indexOf(9,-2));//1
console.log(array.indexOf(9,-3));//1
console.log(array.indexOf(9,-4));//1
console.log(array.indexOf(4,-2));//1

console.log("eg:2")
//eg:2
//Finding all the occurrences of an element
const indices = [];
const arrays = ['a', 'b', 'a', 'c', 'a', 'd'];
const element = 'a';
let idx = arrays.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = arrays.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]




