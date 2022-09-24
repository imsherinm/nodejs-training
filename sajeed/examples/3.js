//3. find a vehicle with a specified color (pass color as parameter)
  
const data = require('/Users/sajid/Desktop/nodejs-training/data.js');


//function    , (pass parameter )
/*function myFunction(color){
      
   //filter process color based 
   return data.filter((car)=>car._source.vehicleColour==color);

}
//enter color as parameter
console.log(myFunction("red"))//show the result*/


const getVehicleBasedOnColor = (color) => {
    try {
        return data.find((car) => car._source.vehicleColour === color);
    } catch (error) {
        console.log(error);
    }
};
//  color as parameter
 const result = getVehicleBasedOnColor('white');
 console.log('result: ', result);
