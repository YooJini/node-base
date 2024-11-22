const express = require('express');
const app = express();

app.listen(1234);

let youtuber1 = {
    channelTitle: "십오야",
    sub: "593만명",
    videoNum: "993개"
}

let youtuber2 = {
    channelTitle: "때껄룩",
    sub: "193만명",
    videoNum: "395개"
}

app.get('/:nickname', function(req,res){
    const {nickname} = req.params;
    if (nickname == '@15ya_egg'){
        res.json(youtuber1);
    }
    else if (nickname == "@takealook."){
        res.json(youtuber2);
    }
    else{
        res.json({
            message: "모름.."
        })
    }
});
