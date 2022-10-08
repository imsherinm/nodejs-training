const http = require('http');
const getOrderData = require('./ordersDate');

const server = http.createServer((req,res => {
    try{
        const url = req.url;
        console.log('url: ', url);
        const result = getOrderData(id);
    }catch (error){
        console.log('error: ',error);
    }
}))