let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    },
    
  ]
  let car = {
    "color": "red",
    "type": "cabrio",
    "registration": new Date('2016-05-02'),
    "capacity": 2
   }

   //push new car
   cars.push(car);
  
   //splice
   /*Array.splice(
  {index where to start},
  {how many items to remove},
  {items to add}
);*/

//Add a new object in the middle - Array.splice
let car1 = {
    "color": "green",
    "type": "cabrio",
    "registration": new Date('2016-05-02'),
    "capacity": 2
  }
  cars.splice(4, 0, car1);
   

   //Find an object in an array by its values - Array.find
//array.find
//This function returns the first matching element:
let finds = cars.find(car=>car.color === "red")
//console.log(finds)
  
 //It's also possible to search for multiple value
// console.log(cars.find(car => car.color === "red" && car.type === "cabrio"));


//Get multiple items from an array that match a condition - Array.filter
//array.filter

//console.log(cars.filter(car=>car.color==="red"));


  
 //Transform objects of an array - Array.map
 //Transform an array of objects into an array of different objects.
 //array.map

 let size = cars.map(car=>{
    if(car.capacity<=3) return "small";
    if(car.capacity<=5) return "medium";
    return "large"
 });
//console.log(size)

//It's also possible to create a new object if we need more values:

let carProperty = cars.map(car=>{
    let property = {
        "capacity":car.capacity,
        "size":"large"
    }
    if(car.capacity<=5) property.size =  "medium";
    if(car.capacity<=3) property["size"] = "small";
    return property
});
//console.log(carProperty)



//Add a property to every object of an array - Array.forEach
//array.forEach

cars.forEach(car=>{
    car.size="large";
    if(car.capacity<=5) car['size']="medium";
    if(car.capacity<=3) car["size"]="small"
});
//console.log(cars)


//Sort an array by a property - Array.sort
//arraySort  swap
// + "dec", -"asc"  ,0 "no change"    swap
let sortedCar = cars.sort((c1,c2)=>(c1.capacity>c2.capacity) ? -1 : (c1.capacity<c2.capacity) ? 1:0);
//console.log(sortedCar);




//Checking if objects in array fulfill a condition - 
//Array.every, Array.includes
//array.some



cars.some(car => car.color === "red" && car.type === "cabrio");
// output: true

cars.every(car => car.capacity >= 4);
// output: false


/*You may remember the function Array.includes which is similar to Array.some, 
but works only for primitive types.*/









 //print array element
 // cars.forEach(val=>console.log(val));

