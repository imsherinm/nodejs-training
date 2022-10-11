
const express = require('express');

const app = express();



app.listen(5000, () => {
    console.log('server is running at port 5000');
});

app.get('/endpoint', (req, res) => {
    reportError.send('helo an arror');
    
});

app.post('/save/:id', (req, res) => {
    response.send('heloi adhil here');
});

// app.get
// app.post
// app.put
// app.delete
// app.patch

// app.use

// app.listen
