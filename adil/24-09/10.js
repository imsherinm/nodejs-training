
const response = require('/home/adhil/nodejs-training/orders.json');
const orders = response.data.orders;
const online = orders.filter((element) =>element.paymentType == "ONLINE").reduce((sum, value) => sum + Number(value.orderAmount), 0);
const cod = orders.filter((element) =>element.paymentType == "COD").reduce((sum, value) => sum + Number(value.orderAmount), 0);
function sum(){
 const sumOf = {
    onlinePayment : online,
    COD : cod
}
return sumOf;
}
//display
console.log(sum());