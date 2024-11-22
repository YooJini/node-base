function first(){
    console.log('첫번째');
}

function second(){
    console.log('두번째');
}

function third(){
    console.log('세번째');
}

first();
setTimeout(second, 2000);   // 콜백 함수: 매개변수로 함수를 전달하는 함수
third();