//13. sum of completed order amount (status = completed)
  
const response = require('/Users/sajid/Desktop/nodejs-training/orders.json');
const orders = response?.data?.orders;

let count=0;
//orders completed list
const com = orders.filter((element) => element.status == "COMPLETED");

//console.log(com)
const sum = com.reduce((sum, value) => sum + Number(value.orderAmount), 0);
console.log("sum of completed orders",sum);