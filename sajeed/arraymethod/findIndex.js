// findIndex() 
 //return the index of the first element 
 // satisfies the provided testing function.
// Otherwise, -1 is returned.

//eg:1

const array1 = [5, 12, 8, 130, 44];//array
//check condition return index(1st satisfying )
const isLargeNumber = (element) => element > 13;//arrow function

console.log(array1.findIndex(isLargeNumber));//findindex

//eg:2
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex((fruit) => fruit === "blueberries");

console.log(index); // 3
