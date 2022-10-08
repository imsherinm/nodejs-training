const response = require('/home/adhil/nodejs-training/orders.json');
const orders = response?.data?.orders;
console.log("whether all orders are above 100 order amount");
console.log("summary:",orders.every((value)=>value.name>100));