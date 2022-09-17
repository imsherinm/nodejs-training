//unshift()
//The unshift() method adds a new element to an array (at the beginning), 


//eg:1
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(`orginal array
 ${fruits}`);
fruits.unshift("Lemon");
console.log(`unshift array 
${fruits}`);

//eg2:
const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

const unshifted = myFish.unshift('cows');

console.log(myFish); 

console.log(unshifted); 