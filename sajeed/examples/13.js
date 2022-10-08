//13. sum of completed order amount (status = completed)
  
const response = require('../../orders.json');
const orders = response?.data?.orders;

let count=0;
//orders completed list
const sum = orders.filter((element) => element.status == "COMPLETED").reduce((sum, value) => sum + Number(value.orderAmount), 0);
console.log("sum of completed orders",sum);
//console.log(com)
//const sum = com.reduce((sum, value) => sum + Number(value.orderAmount), 0);
//console.log("sum of completed orders",sum);