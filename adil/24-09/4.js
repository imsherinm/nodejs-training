 
const response = require('/home/adhil/nodejs-training/orders.json');
const orders = response.data.orders;

const canc= orders.filter((element) => element.status == "CANCELLED");

const sum = canc.reduce((sum, value) => sum + Number(value.orderAmount), 0);
console.log("cancelled orders are",sum);