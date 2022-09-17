//eg:1

//Creates a new array by performing a function on each array element.
//create numbered array
const numbers=  [45, 4, 9, 16, 25];
// pass a function to map
const mapedArray = numbers.map(myFunction);
console.log(mapedArray)//new array
//function , parameter value
function myFunction(value){
    return value*2;
}


//eg:2
//Using map to reformat objects in an array
//object array
const objectArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
  //reformat objects
  const reformattedArray = objectArray.map(({ key, value}) => ({ [key]: value }));
  console.log(reformattedArray);

  //eg:3
  //Mapped array contains undefined
  const mapArray = [1,2,3,4];
  const filterArray = mapArray.map((num,index) => {
      if(index<3){
        return num;
      }

  });
  console.log(filterArray);