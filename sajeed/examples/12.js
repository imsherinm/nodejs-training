//12. total number of cancelled orders (status = cancelled)
const response = require('/Users/sajid/Desktop/nodejs-training/orders.json');

const orders = response?.data?.orders;
let count=0;

//orders cancelled list and count
orders.filter((element) => {
  if(element.status == "CANCELLED")
  
     count++;
});

console.log( "cancelled orders:",count );
 
