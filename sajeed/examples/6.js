//6. find a vehicle with baseCharge 
const data = require('../../data');

const vehicleWithBaseCharge = data.find((car) => car._source.baseCharge);
 console.log('vehicleWithBaseCharge: ', vehicleWithBaseCharge);


/*//full basecharge list
console.log(data.find(car=>car._source.baseCharge));
//basecharge value based
console.log(data.find(car=>car._source.baseCharge===55));*/

