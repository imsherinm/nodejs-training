//1. find vehicles without driver id 

const data = require('../../data');

//vehicles without driver id 
console.log("find vehicles without driver id ");
console.log(data.filter((car)=>!car._source.driverId));