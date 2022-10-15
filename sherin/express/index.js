const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => {
    console.log('server is running ');
});

// http methods

// endpoints

// domain:5000/v1/profile

// read - GET

// write - POST

// update - PUT

// delete -  DELETE

const middle1 = (req, res, next) => {
    console.log('hit on middleware 1');
    if (req.headers.language === 'english') {
        res.status(400).send('we dont handle english requests');
    }
    next();
};

app.use(middle1);

app.get('/', (req, res) => {
    try {
        // console.log('here is the get method handler');
        res.send('home');
        // console.log(req.body);
        // res.send({ name: 'sherin', age: 10, status: 'active' });
        //
    } catch (error) {
        console.log('error: ', error);
        // res.sendStatus(500).send('server side error');
    }
});

// app.post('/profile', (req, res) => {
//     try {
//         console.log('this is second profile endpoint');
//     } catch (error) {
//         console.log('error: ', error);
//     }
// });

const middle = (req, res, next) => {
    console.log('hit on middleware');
    req.headers.date = new Date().toLocaleDateString();
    next();
};

app.post('/save/:id/file/:fileName', middle, (req, res) => {
    try {
        console.log('hit on handler');
        console.log('headers', req.headers);
        // console.log('body', req.body);
        // console.log('params', req.params);
        // console.log('query', req.query);
        res.send();
    } catch (error) {
        console.log('error: ', error);
    }
});

// app.all('*', (req, res) => {
//     try {
//         res.status(404).send('the page you are looking is not found');
//     } catch (error) {
//         console.log('error: ', error);
//     }
// });

// app.get
// app.post
// app.put
// app.delete
// app.patch

// app.use

// app.listen
