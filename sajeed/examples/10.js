//10. get a sorted array of vehicle type ids from the given data


const data = require('../../data');

const sortVehicleTypeIds = data.map((vehicle) => vehicle._source.vehicleTypeId).sort((a, b) => b - a);

 console.log('sortVehicleTypeIds: ', sortVehicleTypeIds);

