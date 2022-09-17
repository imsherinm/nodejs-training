//some()
//at least one of the elements of the array satisfies the condition

//eg:1
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true

//eg:2
const fruits = ['apple', 'banana', 'mango', 'guava'];
//
function availability(arr, val) {
  return arr.some((arr) => val === arr);
}

console.log(availability(fruits, 'orange'));   // false
console.log(availability(fruits, 'banana')); // true
