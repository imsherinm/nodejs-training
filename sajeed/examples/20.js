/*20. write a function to get sum of online and cod amount separately 
(return an object which contains sum of both online and cod amount)*/



const response = require('/Users/sajid/Desktop/nodejs-training/orders.json');
const orders = response?.data?.orders;


let count=0;
//get online payment list
const online = orders.filter((element) =>element.paymentType == "ONLINE").reduce((sum, value) => sum + Number(value.orderAmount), 0);
 // COD payment list
const cod = orders.filter((element) =>element.paymentType == "COD").reduce((sum, value) => sum + Number(value.orderAmount), 0);
//function return sum
function sum(){
 const sumOf = {
    onlinePayment : online,
    COD : cod
}
return sumOf;
}
//display object
console.log(sum());
//console.log(typeof(sum()))

