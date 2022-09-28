const response = require('/home/adhil/nodejs-training/orders.json');
const orders = response.data.orders;

const getOrderId = (id) => {
    try {
        return orders.find((val) => val.id === id);
    } catch (error) {
        console.log(error);
    }
};
 const result = getOrderId(25649);
 console.log(result);