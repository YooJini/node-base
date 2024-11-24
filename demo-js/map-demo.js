const numbers = [1,2,3,4,5]

// 객체에서 요소를 하나 꺼낸 다음
// 매개변수로 그 요소를 전달하여 호출되는 콜백함수
const mapArr = numbers.map(function(a, b, c){
    console.log(a, b, c)    // a: 데이터, b: 인덱스, c: 객체 통째로
    return a
})

console.log(mapArr)
