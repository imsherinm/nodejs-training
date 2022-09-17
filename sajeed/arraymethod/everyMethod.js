//every() method all the elements of the array satisfy the given condition or not
//It returns a Boolean value.

//eg:1

var numbers = [45, 4, 9, 16, 25];
//every()
var allOver18 = numbers.every(myFunction);

console.log( "Are all the values greater than 18? " + allOver18);
//function
function myFunction(value, index, array) {
  return value > 18;
}

//eg:2
//Check if one array is a subset of another array

const isSubset = (array1,array2) => array2.every((element) => array1.includes(element));
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); 
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); 

//eg:3
//Using arrow functions
//callbackFn will not run on elements that are appended to the array after the call to every begins.

//modifying item
let arr=[1,2,3,4];
arr.every((ele,index,array) =>{
arr[index+1]--;
console.log(`[${array}][${index}] -> ${ele}`);
return ele < 2;
})
// Appending items
// ---------------
arr = [1, 2, 3];
arr.every((elem, index, arr) => {
  arr.push('new');
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
})

// Deleting items
// ---------------
arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
  arr.pop();
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
})
