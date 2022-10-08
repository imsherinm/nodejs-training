const response = require('/home/adhil/nodejs-training/orders.json');

const sum = () => {
    try {
        const orders = response?.data?.orders;
        return orders.reduce((sum, value) => sum + Number(value.orderAmount), 0);
    } catch (error) {
        console.log('error: ', error);
    }
};
console.log(sum());