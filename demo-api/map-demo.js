const express = require('express')
const app = express();

app.listen(3000);

let db = new Map()

let notebook = {
    productName: "Notebook",
    price: 2000000
}

let cup = {
    productName: "Cup",
    price: 3000
}

let chair = {
    productName: "Chair",
    price: 100000
}

let poster = {
    productName: "Poster",
    price: 7000
}

db.set(1, notebook)
db.set(2, cup)
db.set(3, chair)
db.set(4, poster)

console.log(db.get(1))
console.log(db.get(2))
app.get('/:n', function(req, res){
    let {n} = req.params
    n = parseInt(n)

    if (db.get(n) == undefined){
        res.json({
            message: "없으요"
        })
    }else{
        product = db.get(n)
        // 객체에 값을 추가하는 방법
        product.id = n
        product["id"] = n
        
        res.json(product)
    }
})

app.get('/:n', function(req, res){
    let {n} = req.params;
    n = parseInt(n);
    if (db.get(n) == undefined){
        res.json({
            message: "없으요"
        })
    }else{
        res.json({
        id: n,
        name: db.get(n)
    });}
});