// 함수(Function)

// 함수 선언문(Declaration) - 호이스팅 발생
function hello1() {}

// 함수 표현식(Expression) - 호이스팅 발생하지 않음
const hello2 = function () {}

// 호이스팅(Hoisting) : 끌어올려지다

hello3()    // Hello

function hello3() {    // 호이스팅
  console.log('Hello')
}


