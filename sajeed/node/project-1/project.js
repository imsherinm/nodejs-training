// server.listen(3000); 
// folder - project 1 
// custom module --- order id fetch
 // server setup 
 // custom module require use 
 // order/222333 
 // order response || no order found respons

const data = require("./data")
const http = require('http')
const path = require('path')

 const server = http.createServer((req,res) => {
   // check url include
   if(data.id.includes(Number(path.basename(req.url))))
    {
        res.end('order response')
    }
    else {
        res.end('no order respons')
    }
})

server.listen(3000)

