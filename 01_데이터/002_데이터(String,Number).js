// 1) String
const string1 = "Hello"   // 리터럴
const string2 = 'Hello'   // 리터럴
const string3 = `Hello ${string1}`   // 템플릿 리터럴

console.log(string3)

// 2) Number
const number = 123
const pi = .14

console.log(number)
console.log(pi)

console.log(typeof(number + undefined))   // NaN
console.log(typeof pi)   // number

const a = 0.1
const b = 0.2
console.log(a + b)  // 0.30000000000004
console.log((a + b).toFixed(1))   // 0.3 toFixed: 숫자데이터를 문자데이터로 바꾼다
console.log(Number((a + b).toFixed(1)))


