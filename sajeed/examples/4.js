//4. find vehicles without location data 

const data = require('/Users/sajid/Desktop/nodejs-training/data.js');

console.log("find vehicles without location data ");
//filter without location
console.log(data.find((car)=>!car._source.location));