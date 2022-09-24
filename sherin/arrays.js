const array = [1, 2, 3, -5, 4, 5, 6, 7, 8, 9, -16];
// 0
//
// let index = 1;
// console.log(array);

// console.log(typeof array);

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// map

// iterate , new Element generate

// const sqr = (number) => number * number;

// // sqr(5)
// console.log('sqr(5): ', sqr(55));

// const getValues = (value, index) => {
//     return value * index;
// };

// const result = array.map((value, index, arr) => value + 5);
// console.log('result: ', result);

// const result = array.map((elements, index) => {
//     if (elements === 5) return elements * 10;
//     else return elements * 5;
// });
// console.log('result: ', result);

// let resultArray = []
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     const result = element * index;
//     resultArray.push(result)

// }

// console.log(resultArray);

// const filterArray = array.map((element) => {
//     if (element % 2 == 0) {
//         return element * element;
//     } else {
//         return (element * 1) / 2;
//     }
// });
// console.log(filterArray);

// const dummyArray = [null, 0, false, '', undefined, 'sherin', 5];

// const even = dummyArray.filter((value) => value);
// console.log('even: ', even);

// const evenSqrs = array.filter((value) => value % 2 === 0).map((value) => value * value);
// console.log('evenSqrs: ', evenSqrs);

// const sqrs = even.map((value) => value * value);

// reduce
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const sum = array.reduce((pre, cur, index, arr) => pre + cur, 5);
// console.log('sum: ', sum);

// pre - 0 , cur - 1 ===== 1
// pre - 1, cur - 2  ===== 3
// pre - 3, cur = 3 ====== 6
// pre - 6, cur -4 ======= 10
// pre - 10, cur- 5 ====== 15

// every , some
// console.log(array);
// const value = array.some((value) => value < 0);
// console.log('value: ', value);

// find
// console.log(array);
// const negative = array.find((value) => value < 0);
// console.log('negative: ', negative);

// sort
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const sortedArray = array.sort((a, b) => b - a); // + 0 -
// console.log('sortedArray: ', sortedArray);

// console.log('sortedArray: ', sortedArray);

// const result = array.forEach((element) => {});

// console.log(result);
