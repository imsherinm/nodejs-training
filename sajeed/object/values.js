//values
//Returns an array containing the values that correspond to all of a given object's own enumerable string properties.

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.values(object1));