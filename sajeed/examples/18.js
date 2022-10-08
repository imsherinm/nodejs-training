//18. write a function to get order details by passing order id 


const response = require('../../orders.json');
const orders = response?.data?.orders;

const getOrderId = (id) => {
    try {
        return orders.find((val) => val.id === id);
    } catch (error) {
        console.log(error);
    }
};
 console.log('result: ',  getOrderId(25650));
