const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/home') {
        response.write('this is home page ');
    } else response.write('<h1>page not found</>');
    response.end();
});

server.listen(3000);

// const server = http.createServer((request, response) => {
//     if (request.url === '/orders') {
//         response.write('orders');
//     } else response.write('hi there');

//     console.log(request.url);
//     response.end();
// });

// server.listen(5000);

// const server = http.createServer((request, response) => {
//     response.write('hi there');
//     response.end();
// });

// server.listen(3000);

// folder - project 1

// custom module --- order id fetch

// server setup

// custom module require use

// order/222333

// order response || no order found response
