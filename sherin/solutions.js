const data = require('../data');
const orders = require('../orders.json');
console.log('orders: ', orders);

// vehicles without driver id

const vehiclesWithoutDrivers = data.filter((vehicle) => !vehicle._source.driverId);
// console.log('vehiclesWithoutDrivers: ', vehiclesWithoutDrivers);

// vehicles with driver id

const vehiclesWithDrivers = data.filter((vehicle) => vehicle._source.driverId);
// console.log('vehiclesWithDrivers: ', vehiclesWithDrivers);

// destructuring of object
// const result = data.map((vehicle) => {
//     let { _source } = vehicle;
//     delete _source.driverId;
//     return _source;
// });

// console.log('result: ', result);

const unavailableVehicles = data.filter((vehicle) => !vehicle._source.available);
// console.log('unavailableVehicles: ', unavailableVehicles);

const getVehicleBasedOnColor = (color) => {
    try {
        return data.find((vehicle) => vehicle._source.vehicleColour === color);
    } catch (error) {
        console.log(error);
    }
};

// const result = getVehicleBasedOnColor('white');
// console.log('result: ', result);

// const sortedVehicles = data.sort((a, b) => a._source.vehicleId - b._source.vehicleId); // + ,0 , -
// console.log(
//     'sortedVehicles: ',
//     sortedVehicles.map((i) => i._source.vehicleId)
// );

const vehicleWithBaseCharge = data.find((vehicle) => vehicle._source.baseCharge);
// console.log('vehicleWithBaseCharge: ', vehicleWithBaseCharge);

const newArray = data.map((vehicle, index) => ({
    ...vehicle._source,
    type: 'vehicle',
    slNo: ++index,
}));

// let number = [1, 2, 3, 4, 5, 6];

// let numberObjects = number.map((num) => ({
//     number: num,
//     next: ++num,
// }));

// console.log('newArray: ', newArray);
// console.log('numberObjects: ', numberObjects);

const unavailableVehicle = data.find((vehicle) => !vehicle._source.available);

const { vehicleModel, vehicleBrand } = unavailableVehicle._source;
// console.log(vehicleModel, vehicleBrand);

const colors = data.map((vehicle) => vehicle._source.vehicleColour);
// console.log('colors: ', colors);

const VehicleTypeIds = data.map((vehicle) => vehicle._source.vehicleTypeId);
const sorted = VehicleTypeIds.sort((a, b) => b - a);
// console.log('VehicleTypeIds: ', VehicleTypeIds);
// console.log('sorted: ', sorted);
