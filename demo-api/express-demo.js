const express = require('express');
const app = express();

app.listen(1234);

app.get('/', function(req, res){
    res.send('Hello World');
});

let book = {
    title: "Node.js",
    price: 20000,
    description: "김송아 지음"
}

app.get('/products/1', function(req,res){
    res.json(book);
});