const orders = require('../../orders.json');

const getOrderData = (id) => {
    try {
        return orders.data.orders.find((i) => i.id === id);
    } catch (error) {
        console.log('error: ', error);
    }
};

module.exports = getOrderData;
