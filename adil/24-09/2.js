const response = require('/home/adhil/nodejs-training/orders.json');
const order = response.data.orders;
let count=0;

//orders cancelled list and count
order.forEach((element) => {
  if(element.status == "CANCELLED")
  
     count++;
});

console.log( "cancelled orders:",count );


