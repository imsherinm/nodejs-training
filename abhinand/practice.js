













const vehicles = [
    {
        
        _index: 'vehicles',
        _type: '_doc',
        _id: '112',
        _score: 1.3862942,
        _source: {
            vehicleBrand: 'MARUTHI',
            vehicleTypeId: 8,
            baseCharge: 55,
            available: true,
             vehicleModel: 'Swiftt12',
            vehicleNumber: 'KL13 123',
            vehicleBrandId: 3,
            vehicleColour: 'white',
            vehicleId: 112,
            vehicleCategory: 'Normal',
            vehicleTypeName: 'MARUTI',
        },
    },
    {
        _index: 'vehicles',
        _type: '_doc',
        _id: '111',
        _score: 1.2039728,
        _source: {
            vehicleBrand: 'Maruthi',
            vehicleTypeId: 6,
            available: false,
            vehicleModel: 'abcd',
            vehicleNumber: 'DB111',
            vehicleBrandId: 10,
            vehicleColour: 'blue',
            vehicleId: 111,
            vehicleCategory: 'Normal',
            vehicleTypeName: 'Saloon',
        },
    },
    {
        _index: 'vehicles',
        _type: '_doc',
        _id: '103',
        _score: 0.6931471,
        _source: {
            vehicleTypeId: 44,
            available: true,
            vehicleColour: 'red',
            vehicleCategory: 'Economy00',
            vehicleBrand: 'BRAND201',
            driverId: '105',
            vehicleModel: 'Nexon1',
            vehicleNumber: '1098',
            vehicleBrandId: 52,
            location: {
                lon: 75.59861755371094,
                lat: 11.603184700012207,
            },
            vehicleId: 103,
            vehicleTypeName: 'CITYWAYSALOONS',
        },
    },
    {
        _index: 'vehicles',
        _type: '_doc',
        _id: '100',
        _score: 0.6931471,
        _source: {
            vehicleTypeId: 44,
            available: true,
            vehicleColour: 'black',
            vehicleCategory: 'CITYWAY11',
            vehicleBrand: 'CITYWAY BMW1',
            driverId: '97',
            vehicleModel: 'CITYWAY A CLASS',
            vehicleNumber: '1234567890',
            vehicleBrandId: 50,
            location: {
                lon: 76.37055969238281,
                lat: 10.319891929626465,
            },
            vehicleId: 100,
            vehicleTypeName: 'CITYWAYSALOONS',
        },
    },
];


// 1. find vehicles without driver id 

// console.log(vehicles.filter((car)=>delete car._id));




// 2. vehicles which are not available (available = false)

// console.log(vehicles.filter(car=>car._source.available==false));





// 3. find a vehicle with a specified color (pass color as parameter)
// let carColor = vehicles.filter(car => car._source.vehicleColour === "blue");
// console.log(carColor);




// 4. find vehicles without location data 
// console.log(vehicles.filter((car)=>delete car._source.location));















// 6. find a vehicle with baseCharge 

// const vehicleWithBaseCharge = vehicles.find((vehicles) => vehicles._source.baseCharge);
// console.log('vehicleWithBaseCharge: ', vehicleWithBaseCharge);




// 7. create a new array of object from the given data with properties vehicle brand , model and vehicle id (result should be an array of objects)
// const newArray = data.map((vehicle, index) => ({
//     ...vehicle._source, 
//     type: 'vehicle',
//     slNo: ++index,
// }));




// 8. get the vehicle brand and model of vehicle which is not available

// const unavailableVehicle = vehicles.find((vehicles) => !vehicles._source.available);
// console.log(unavailableVehicle);




// 9. get list of colors of all vehicle (result should be an array)
// const color = vehicles.map((car)=>car._source.vehicleColour);
// console.log(color);


