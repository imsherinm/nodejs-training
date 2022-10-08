//4. find vehicles without location data

const data = require('../../data');

console.log('find vehicles without location data ');
//filter without location
console.log(data.find((car) => !car._source.location));
