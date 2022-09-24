//9. get list of colors of all vehicle (result should be an array)

const data = require('/Users/sajid/Desktop/nodejs-training/data.js');


const colors = data.map((vehicle) => vehicle._source.vehicleColour);//map method

console.log('colors: ', colors);

