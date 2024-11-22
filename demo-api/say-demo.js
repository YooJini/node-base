const express = require('express');
const app = express();

app.listen(1234);

app.get('/hello', function(req, res){
    res.json({
        say: '안녕하세요'
    });
});

app.get('/bye', function(req, res){
    res.json({
        say: '안녕히가세요'
    });
});

app.get('/nicetomeetyou', function(req, res){
    res.json({
        say: '만나서 반갑습니다'
    });
});