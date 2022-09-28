const response = require('/home/adhil/nodejs-training/orders.json');
const orders = response.data.orders;
console.log("any order is greater than 500");
console.log("summary:",orders.some((value)=>value.name>500));