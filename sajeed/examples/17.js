//17. sort orders based on order amount


const response = require('/Users/sajid/Desktop/nodejs-training/orders.json');
const orders = response?.data?.orders;

console.log(" sorted order amount",orders.sort((a,b)=>b.orderAmount-a.orderAmount));


