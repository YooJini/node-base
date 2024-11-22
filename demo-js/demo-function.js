
// 일반적
function add1(x,y){
    return x + y
}

// 변수에 넣어서 사용. 모듈화
let add2 = function(x,y){
    return x + y
}

// fuction 대신 뒤에 화살표 => 화살표 함수 (arrow fuction)
const add3 = (x,y) => {
    return x + y
}

// return 생략
var add4 = (x,y) => x + y
