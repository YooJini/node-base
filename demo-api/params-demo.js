const express = require('express');
const app = express();

app.listen(1234);

app.get('/products/:n', function(req,res){
    res.json({
        num: parseInt(req.params.n)
    })
});

// app.get('/:nickname', function(req,res){

//     const param = req.params;

//     res.json({
//         channel: param.nickname
//     })
// });

app.get('/watch', function(req,res){
    const {v, t} = req.query;

    res.json({
        video: v,
        time: t
    });
});