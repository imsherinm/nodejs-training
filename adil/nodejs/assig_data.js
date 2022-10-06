const data = require("/home/adhil/nodejs-training/adil/nodejs/orders.json");
const getOrder = (id) => {
    
    try {
        data.data.orders.find((i)=> i.id === id );
         
    } catch (error) {
        console.log(error)
    }
};
