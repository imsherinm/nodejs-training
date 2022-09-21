const person = {
    property1: 'value1',
    property2: 'value2',
    property3: 'value3',
    property4: 'value4',
};

// keys, values, entries

// const arr = [1];

// const keys = Object.keys(person);
// const values = Object.values(person);
// const entries = Object.entries(person);

// entries.forEach(([key, value]) => {
//     console.log('value: ', value);
//     console.log('key: ', key);
// });

//! mark for destructuring

// console.log(person);

// [
//     ['property1', 'value1'],
//     ['property2', 'value2'],
//     ['property3', 'value3'],
//     ['property4', 'value4'],
// ];

// let data = '123';

// data = '12223445678';

//

// let arr = [1, 2, 3, 'hello', undefined];
let number = { value: 1, value2: 3 }; // 0x3423423423

let copy = number; // 0x3423423423

copy.value = 6;

console.log(number);
