const express = require('express');

const app = express();
// Custom module 
const data = require("../node/project-1/data")
console.log(data)
const path = require('path')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5000, () => {
    console.log('server is running at port 5000');
});



// Creating endpoints 
app.get('/profile/25650', (req, res) => {
  
    try {
         // check url include
   if(data.id.includes(Number(path.basename(req.url))))
   {  
    res.send({ name: 'sajeed', age: 25, status: 'active' });   
       
   }
   else {
       res.send('no order respons')
   }
             
    } catch (error) {
        console.log('error: ', error);
        res.sendStatus(500).send('server side error');
    }
});



//Creating endpoints 
// Handling request data ( headers,body, params, query)
app.post('/save/:id', (req, res) => {
    try {
        console.log('headers', req.headers);
        console.log('body', req.body);
        console.log('params', req.params);
        console.log('query', req.query);
    } catch (error) {
        console.log('error: ', error);
    }
});


// app.get('/profile', (req, res) => {
//     try {
        
//         res.send({ name: 'sajeed', age: 25, status: 'active' });
       
//     } catch (error) {
//         console.log('error: ', error);
//         res.sendStatus(500).send('server side error');
//     }
// });
