//Object.freeze()
const person = {
    age:18
};
Object.freeze(person);
person.age = 20;//can not be  re-assigned (freeze)
console.log(person.age);
