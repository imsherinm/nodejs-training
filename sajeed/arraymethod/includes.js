//include method
//includes a certain value among its entries,
// returning true or false

eg:1;
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

//eg:2
//If fromIndex is greater than or equal to the length of the array, false is returned. The array will not be searched.
// If the computed index is less than or equal to 0, the entire array will be searched.
// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97

const arr = ['a', 'b', 'c'];

arr.includes('a', -100) // true
arr.includes('b', -100) // true
arr.includes('c', -100) // true
arr.includes('a', -2)   // false