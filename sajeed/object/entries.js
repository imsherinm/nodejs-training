//entries
const object1 = {
    a:"somestring",
    b:42
}
for(let [key,value] of Object.entries(object1)){
    console.log(`${key}:${value}`);
}

//eg:2
//object entriesto map
const numbers = {one:"one",two:2};
const map = new Map(Object.entries(numbers));
console.log(map);

//Iterating through an Object
const obj = { foo: 'bar', baz: 42 };
Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`));