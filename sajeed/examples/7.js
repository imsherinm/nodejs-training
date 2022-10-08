/*7. create a new array of object from the given data with properties vehicle brand ,
 model and vehicle id (result should be an array of objects)  */


 const data = require('../../data');


const newArray = data.map((vehicle, index) => ({
   
    vehicleModel: vehicle._source.vehicleModel,
    vehicleBrand: vehicle._source.vehicleBrand,
    id: vehicle._source.vehicleId,
}));

console.log('newArray: ', newArray);

