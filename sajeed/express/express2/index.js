const express = require('express');
const app = express();
const path = require('path')
const sayHi = require('./utils')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/',(req,res)=>{
    res.status(200).send('sajid')
res.send(sayHi('sajid'))
})

app.get('/about',(req,res)=>{
    res.status(200).send('About page')
})

app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000,()=>{
   
    console.log('server is listening on port 5000')
});

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

