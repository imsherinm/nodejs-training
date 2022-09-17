//filter() method  is used to create a new array from a given array 
//satisfied condition
//eg:1

let numbers = [45,4,9,16,25];//array
//filter method
let filterArray = numbers.filter(myFunction);
//display filtered array
console.log(filterArray);
//function
function myFunction(value,index,array){
  return  value>20;

}


eg:2
console.log("prime number");
//Find all prime numbers in an array
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];//array
//function check prime number
function isPrime(num) {
  //prime number checking loop
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); //filter array
