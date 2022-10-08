//14. sum of cancelled order amount (status = cancelled)
 
const response = require('/Users/sajid/Desktop/nodejs-training/orders.json');
const orders = response?.data?.orders;

let count=0;
//orders cancelled list
const sum = orders.filter((element) => element.status == "CANCELLED").reduce((sum, value) => sum + Number(value.orderAmount), 0);
console.log("sum of cancelled orders",sum);

