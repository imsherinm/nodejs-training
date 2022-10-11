const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => {
    console.log('server is running at port 3000');
});

app.get('/profile', (req, res) => {
    try {
        // res.sendStatus(200).send('profile');
        // console.log(req.body);
        res.send({ name: 'sherin', age: 10, status: 'active' });
        //
    } catch (error) {
        console.log('error: ', error);
        res.sendStatus(500).send('server side error');
    }
});

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

// app.get
// app.post
// app.put
// app.delete
// app.patch

// app.use

// app.listen
