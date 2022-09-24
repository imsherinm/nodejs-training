//6. find a vehicle with baseCharge 
const data = require('/Users/sajid/Desktop/nodejs-training/data.js');

const vehicleWithBaseCharge = data.find((car) => car._source.baseCharge);
 console.log('vehicleWithBaseCharge: ', vehicleWithBaseCharge);


/*//full basecharge list
console.log(data.find(car=>car._source.baseCharge));
//basecharge value based
console.log(data.find(car=>car._source.baseCharge===55));*/

