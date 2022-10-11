const express = require('express');
const app = express();

app.get('/mycoolapp/', function(req, res){
    res.send("Hello from the root application URL");
});

app.get('/mycoolapp/test/', function(req, res){
    res.send("Hello from the 'test' URL");
});

app.listen(0, () => console.log('Application is running'));