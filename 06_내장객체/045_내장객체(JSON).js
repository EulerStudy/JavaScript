// JSON(Javascript Object Notation)
// 데이터 전달을 위한 표준 포맷!
// 문자, 숫자, 불린, Null, 객체, 배열만 사용
// 문자는 큰 따옴표만 사용
// 객체의 마지막 후행 쉼표 사용 불가
// .json 확장자 사용

// JSON.stringify() - 데이터를 JSON 문자로 변환
// JSON.parse() - JSON 문자를 분석해 데이터로 변환

console.log(JSON.stringify('Hello world!'))   // "Hello world!""
console.log(JSON.stringify(123))              // 123
console.log(JSON.stringify(false))            // false
console.log(JSON.stringify(null))             // null
console.log(JSON.stringify({name: 'Heropy', age: 85}))  // {"name":"Heropy","age":85} 
console.log(JSON.stringify([1, 2, 3]))        // [1, 2, 3]

console.log(JSON.parse('Hello world!'))     // Hello world!
console.log(JSON.parse('123'))              // 123
console.log(JSON.parse('false'))            // false
console.log(JSON.parse('null'))             // null
console.log(JSON.parse('{"name":"Heropy","age":"85"}'))  // {name: 'Heropy', age: 85} 
console.log(JSON.parse('[1, 2, 3]'))        // [1, 2, 3]

import abc from './test.json'

console.log(abc)    // {a: 1, b: 'B'}