//19. sum of online payment amount

 
const response = require('../../orders.json');
const orders = response?.data?.orders;

let count=0;
//get online payment list
const sum = orders.filter((element) => element.paymentType == "ONLINE").reduce((sum, value) => sum + Number(value.orderAmount), 0);

console.log(" sum of online payment amount",sum);