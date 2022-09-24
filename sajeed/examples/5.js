//5. sort the array based on 
      //5.1 _score 
      //5.2 vehicle Id

      const data = require('/Users/sajid/Desktop/nodejs-training/data.js');
       // sort
       const sortedVehicles = data.sort((a, b) => a._score - b._score); // + ,0 , -
       console.log(
          'sortedVehicles: ',
           sortedVehicles.map((i) => i._source.vehicleId)
      );  

    
    /*   //first sort score and store the result
   const sortScore = vehicles.sort((c1,c2)=>c1._score>c2._score ? 1 :c2._score<c1._score ? -1 : 0);
      //2nd sort vehicleid with first sort result "sortScore"
   const finalSort = sortScore.sort((c1,c2)=>c1._source.vehicleId>c2._source.vehicleId ? 1 :c2._source.vehicleId<c1._source.vehicleId ? -1 : 0);
   console.log(finalSort);*/