const response = require('/home/adhil/nodejs-training/orders.json);
const orders = response?.data?.orders;
console.log(" sorted order_amount",orders.sort((a,b)=>a.orderAmount-b.orderAmount));

