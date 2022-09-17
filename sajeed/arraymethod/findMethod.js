//find()
//return 1st elemnet value(condition correct)
//no value ,return "undefined"

//eg:1;
const array = [5, 12, 8, 130, 44];//array
//find condition checked array
const findArray = array.find(element => element>12);
//display find value
console.log(findArray);


//eg:2
//Find an object in an array by one of its properties
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];//object array
  
  const result = inventory.find(({ name }) => name === 'cherries');//arrow function
  
  console.log(result)//print result value