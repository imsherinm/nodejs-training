const response = require('/home/adhil/nodejs-training/orders.json');
const orders = response.data.orders;


const compl = orders.filter((element) => element.status == "COMPLETED");
const sum = compl.reduce((sum, value) => sum + Number(value.orderAmount), 0);
console.log(sum);