//reduce()
//reduce() is to return the sum of all the elements in an array:

//eg:1
const numbers = [45, 4, 9, 16, 25];
const sum = numbers.reduce(myFunction);

console.log("The sum is " + sum);

function myFunction(total, value, index, array) {
  return total + value;
}

eg:2
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10