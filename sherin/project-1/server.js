const http = require('http');
const getOrderData = require('./ordersDate');

const server = http.createServer((req, res) => {
    try {
        const url = req.url;
        console.log('url: ', url);
        // formate the url and pass as id
        const result = getOrderData(id);
    } catch (error) {
        console.log('error: ', error);
    }
});
