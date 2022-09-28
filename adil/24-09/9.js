const response = require('/home/adhil/nodejs-training/orders.json');
const orders = response?.data?.orders;

const onli = orders.filter((element) => element.paymentType == "ONLINE");

const sum = onli.reduce((sum, value) => sum + Number(value.orderAmount), 0);
console.log(" sum of online payment",sum);