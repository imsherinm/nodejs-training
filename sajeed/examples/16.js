
//16. check whether all orders are above 100 order amount

const response = require('/Users/sajid/Desktop/nodejs-training/orders.json');
const orders = response?.data?.orders;

console.log("check whether all orders are above 100 order amount");
console.log("result:",orders.every((val)=>val.name>100));