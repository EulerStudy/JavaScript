// 심볼(Symbol)
// 변경이 불가한 데이터로, 유일한 식별자를 만들어 데이터를 보호하는 용도로 사용할 수 있다.
// Symbol('설명')
// '설명'은 단순 디버깅을 위한 용도일 뿐, 심볼 값과는 관계가 없다.

const sKey = Symbol('Hello!')
const user = {
  key: '일반 정보!',
  [skey]: '민감한 정보!',
}

console.log(user.key)       // 일반 정보!
console.log(user['key'])    // 일반 정보!
console.log(user[sKey])     // 민감한 정보!
console.log(user[Symbol('Hello')])  // undefined
console.log(skey)   // Symbol(Hello!)
console.log(typeof symbol)  // symbol


/// keys.js
export const birthKey = Symbol('Date of birth!')
export const emailsKey = Symbol('Emails')

//// heropy.js
import { birthKey, emailsKey } from './keys.js'
export default {
  firstName: 'YoungWoong',
  lastName: 'Park',
  age: 38,
  [birthKey]: new Date(1985, 11, 16, 17, 30),
  [emailsKey]: ['thesecong@gami.com', 'abc@naver.com']
}
/// main.js
import heropy from './heropy.js'

console.log(heropy) // {firstName: 'YounbgWoong', lastName: 'Park', age: 38, Symbol(Date of birth!): Mon Dec 16 1985 17:30:00 GMT+0900 (한국 표준시), Symbol(Emails!): Array(2)}
// Symbol로 만든 속성들은 코드로 조회되지 않는다.
console.log(Object.keys(heropy))  // ['firstName', 'LastName', 'age']
for (const key in heropy) {
  console.log(heropy[key])  // YoungWoong Park 38
}
//
import { birthKey, emailsKey } from './keys.js'

console.log(heropy[birthKey])  // Mon Dec 16 1985 17:30:00 GMT+0900 (한국 표준시)
console.log(heropy[emailsKey])  // ['thesecon@gmail.com', 'abc@naver.com']

// BigInt
// BigInt는 길이 제한이 없는 정수(integer)이다.
// 숫자(number) 데이터가 안정적으로 표시할 수 있는
// 최대치(`2^53-1`)보다 큰 정수를 표현할 수 있다.
// 정수 뒤에 `n`을 붙이거나 `BigInt()`를 호출해 생성한다.

console.log(1234567890123456789012345678901234567890) // 1.23456789912345678e+39

console.log(1234567890123456789012345678901234567890n)  // 1234567890123456789012345678901234567890n
console.log(BigInt('1234567890123456789012345678901234567890')) // 1234567890123456789012345678901234567890n

const a = 11n
const b = 22

// 숫자 => BigInt
console.log(a + BigInt(b))  // 33n
console.log(typeif (a + BigInt(b))) // bigint

// BigInt => 숫자
console.log(Number(a) + b)  // 33
console.log(typeof (Number(a) + b)) // number


