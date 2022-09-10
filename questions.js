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
    return array.slice(0, n);
}

// console.log(getFirstNElements([1, 2, 3, 4], 0));
