const express = require('express');
const app = express();

app.listen(1234);

// API: GET + "http://localhost:1234/test"
// "TEST SUCCESS"
app.get('/test', function(req, res){
    res.send('TEST SUCCESS');
});

app.get('/test/1', function(req, res){
    res.send('One!!');
});