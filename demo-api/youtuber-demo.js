// express 모듈 세팅
const express = require('express')
const app = express()

app.listen(1234)

// 객체 데이터 세팅
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

let youtuber3 = {
    channelTitle: "지니의 가짜채널",
    sub: "100만명",
    videoNum: "10개"
}

// 맵 (테이블) 세팅
let db = new Map()

db.set(1, youtuber1)
db.set(2, youtuber2)
db.set(3, youtuber3)

// 전체 유튜버 조회
app.get('/youtubers', (req, res) => {

    let youtubers = {}
    db.forEach(function(youtuber){
        youtubers[youtuber.channelTitle] = youtuber
    })

    res.json(youtubers)
})

// 개별 유튜버 조회
app.get('/youtubers/:id', function (req, res){
    let {id} = req.params

    id = parseInt(id)

    const youtuber = db.get(id)

    if (youtuber == undefined){
        res.json({
            message: "유튜버 정보를 찾을 수 없습니다."
        })
    }else
        res.json(youtuber)
})

app.use(express.json())
// 유튜버 등록
app.post('/youtubers', (req, res) => {

    const newData = req.body

    key = db.size + 1
    db.set(key, newData)
    
    res.json({message: `${newData.channelTitle}님 유튜브 채널 개설을 축하합니다!`})
})

// 개별 유튜버 삭제
app.delete('/youtubers/:id', (req, res)=> {
    let {id} = req.params
    id = parseInt(id)

    let data = db.get(id)

    if (data === undefined){
        res.json({message: `${id}번 유튜버 정보를 찾을 수 없습니다.`})
    }
    else{
        db.delete(id)
        res.json({message: `${data.channelTitle} 유튜브 채널이 삭제되었습니다.`})}
})

// 전체 유튜버 삭제
app.delete('/youtubers', (req, res)=>{
    
    let msg =''

    if(db.size > 0){
        db.clear()

        // db.forEach((a, b)=>{
        //     db.delete(b)
        // })
        msg = '전체 유튜버가 삭제되었습니다.'
   
    }
    else{
        msg = '삭제할 유튜버 데이터가 없습니다'
    }

    res.json({message: msg})
})

// 개별 유튜버 수정 (채널 타이틀 수정)
app.put('/youtubers/:id', (req, res)=>{

    let {id} = req.params
    id = parseInt(id)

    let msg = ''
    let data = db.get(id)
    if (data === undefined){
        meg = `${id}번 유튜버 정보를 찾을 수 없습니다.`
    }
    else{
        let originTitle = data.channelTitle
        let newTitle = req.body.channelTitle
        data.channelTitle = newTitle
        db.set(id, data)
        
        msg = `채널명이 '${originTitle}' -> '${newTitle}'로 변경되었습니다.`
    }
    
    res.json({message: msg})
})