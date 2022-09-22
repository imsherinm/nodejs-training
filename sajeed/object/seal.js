//Object.seal()
//Prevents other code from deleting properties of an object.

const person = {
      age: 18
  };
  
  Object.seal(person);
  person.age = 33;
  console.log(person.age);
  // expected output: 33
  
  delete person.age; // cannot delete when sealed
  console.log(person.age);
  // expected output: 33