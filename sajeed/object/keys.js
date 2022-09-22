//keys
//Returns an array containing the names of all of the given object's own enumerable string properties.

const keysObject = {
    a:"somestring",
    b:2,
    c:false
}
console.log(Object.keys(keysObject));
console.log(Object.values(keysObject));
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); 
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj));


//eg:2

const person = {
    property1:"value1",
    property2:"value2",
    property3:"value3",
    property4:"value4",
};

const keys = Object.keys(person);
console.log(person);
console.log("keys",keys);
const otherPerson = person;
console.log("otherperson",otherPerson);
otherPerson.property1=2;
console.log("otherperson",otherPerson);
console.log(person);
console.log("keys",Object.values(person));



