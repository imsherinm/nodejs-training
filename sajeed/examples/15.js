//15. check whether any order amount is greater than 500 order amount

const response = require('../../orders.json');
const orders = response?.data?.orders;

console.log("any order amount is greater than 500");
console.log("result:",orders.some((val)=>val.orderAmount>500));