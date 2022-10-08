//11. sum of order amount (orderAmount)

const response = require('/Users/sajid/Desktop/nodejs-training/orders.json');

//sum
const getSum = () => {
    try {
        const orders = response?.data?.orders;
                               
        return orders.reduce((sum, value) => sum +Number(value.orderAmount), 0); //1428
    } catch (error) {
        console.log('error: ', error);
    }
};

// getSum();
console.log('getSum();: ', getSum());


