// .toFixed()
// 숫자를 지정된 고정 소숫점 표기(자릿수)까지 표현하는 문자로 반환

const num1 = 3.1415926535
console.log(num1.toFixed(2))           // 3.14
console.log(typeof num1.toFixed(2))    // string
console.log(parseFloat(num1.toFixed(2)))   // 3.14

// .toLocaleString()
// 숫자를 현지 언어 형식의 문자로 반환
const num2 = 1000000
console.log(num2.toLocaleString())          // 1,000,000
console.log(`${num2.toLocaleString()}원`)   // 1,000,000원

// Number.isInteger()
// 숫자가 정수(integer)인지 확인

const num3 = 123
const pi = 3.14
console.log(Number.isInteger(num3))   // true
console.log(Number.isInteger(pi))     // false

 // Number.isNaN()
 // 주어진 값이 NaN인지 확인

 const num4 = NaN
 const num5 = 123
 const str1 = 'Hello world'
 const nul = null

 console.log(Number.isNaN(num4))   // true
 console.log(Number.isNaN(num5))   // false
 console.log(Number.isNaN(str1))   // false
 console.log(Number.isNaN(nul))    // false

 // Number.parseInt() 또는 parseInt()
 // 주어진 값(숫자, 문자)를 파싱해 특정 진수(radix)의 정수로 반환

 const str2 = '3.1415926535'
 const num6 = 3.1415926535

 console.log(Number.parseInt(str2, 10))   // 3
 console.log(Number.parseInt(num6, 10))   // 3
 console.log(parseInt(str2, 10))   // 3
 console.log(parseInt(num6, 10))   // 3

// Number.parseFloat() 또는 parseFloat()
// 주어진 값(숫자,문자)를 파싱해 부동소수점 실수로 반환(숫자)

const str3 = '3.1415926535'
const num7 = 3.1415926535
console.log(Number.parseFloat(str3))    // 3.1415926535
console.log(Number.parseFloat(num7))    // 3.1415926535
console.log(parseFloat(str3))    // 3.1415926535
console.log(parseFloat(num7))    // 3.1415926535


