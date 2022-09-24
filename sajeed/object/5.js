//5. sort the array based on 
      //5.1 _score 
      //5.2 vehicle Id

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
    
       //first sort score and store the result
   const sortScore = vehicles.sort((c1,c2)=>c1._score>c2._score ? 1 :c2._score<c1._score ? -1 : 0);
      //2nd sort vehicleid with first sort result "sortScore"
   const finalSort = sortScore.sort((c1,c2)=>c1._source.vehicleId>c2._source.vehicleId ? 1 :c2._source.vehicleId<c1._source.vehicleId ? -1 : 0);
   console.log(finalSort);