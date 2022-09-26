//19. sum of online payment amount

 
const response = require('/Users/sajid/Desktop/nodejs-training/orders.json');
const orders = response?.data?.orders;

let count=0;
//get online payment list
const com = orders.filter((element) => element.paymentType == "ONLINE");

//console.log(com)
const sum = com.reduce((sum, value) => sum + Number(value.orderAmount), 0);
console.log(" sum of online payment amount",sum);