//using
//You can simply use copy = Object.create(originalObj); 
//but you may want to use copy = JSON.parse(JSON.stringify(originalObj));
//to avoid any reference in sub objects (Deep Copy)


//1. Using Spread
const persons = {
    property1:"value1",
    property2:"value2",
    property3:"value3",
    property4:"value4",
};
const ke = Object.keys(persons);
console.log(ke);

//using spread

const personChange = {...persons};
personChange.property1=1;//value assign
console.log("personChange",personChange);//value change
console.log("persons",persons);

//2. Using Object.assign
// Object.assign  "Note the empty {} as the first argument"
console.log("persons",persons);
const personChange2 = Object.assign({},persons);
personChange2.property2=2;
console.log("personChange2",personChange2);//value change
console.log("persons",persons);


//3. Using JSON
const personChange3 = JSON.parse(JSON.stringify(persons));//stringify json
personChange3.property3=3;
console.log("personChange3",personChange3);//value change
console.log("persons",persons);

