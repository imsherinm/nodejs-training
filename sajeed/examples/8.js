//8. get the vehicle brand and model of vehicle which is not available

const data = require('../../data');


/*console.log("    unavailable car")
console.log("")
const availables = data.find((car) => {
    if(car._source.available==false){
        console.log("Brand:",car._source.vehicleBrand,"   "," ","Modal:",car._source.vehicleModel)
    }

});
       */
      

const unavailableVehicle = data.find((vehicle) => !vehicle._source.available);

const { vehicleModel, vehicleBrand } = unavailableVehicle._source;
 console.log(vehicleModel, vehicleBrand)

