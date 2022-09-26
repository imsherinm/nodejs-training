//18. write a function to get order details by passing order id 


const response = require('/Users/sajid/Desktop/nodejs-training/orders.json');
const orders = response?.data?.orders;

const getOrderId = (id) => {
    try {
        return orders.find((val) => val.id === id);
    } catch (error) {
        console.log(error);
    }
};
//  id as parameter
 const result = getOrderId(25650);
 console.log('result: ', result);
