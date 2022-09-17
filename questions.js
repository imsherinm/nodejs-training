// naming Conventions -  proper meaning full names for variables and function names

// while solving a problem

// make it work
// make it optimized
// make it readable
// test the code
// ship the code

// 1. Write a JavaScript function to check whether an `input` is an array or no

// Array.isArray()

function checkArrayOrNot(inputArray) {
    return Array.isArray(inputArray);
}

// console.log(checkArrayOrNot([]));

// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array

// slice (startingIndex , endingIndex);
// will return an Array as result
function getFirstNElements(array, n = 1) {
    //n=1 , default value for function arguments
    return array.slice(0, n);
}

// console.log(getFirstNElements([1, 2, 3, 4], 0));

// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
function getLastNElements(array, n = 1) {
    return array.slice(-n);
    // -ve value to count from reverse order
}

console.log(getLastNElements([10, 20, 30, 40], 0));

//Write a simple JavaScript program to join all elements of the following array into a string

// Write a JavaScript program to sort the items of an array

//Write a JavaScript program to compute the sum and product of an array of integers.

//Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

//Write a JavaScript function to remove a specific element from an array.
