// Object.assign()
// 하나 이상의 출처(Source) 객체로부터 대상(Target) 객체로 속성을 복사하고 대상 객체를 반환

const target = { a: 1, b: 2}
const source1 = { b: 3, c: 4 }
const source2 = { c: 5, d: 6 }
const result1 = Object.assign(target, source1, source2)
const result2 = Object.assign({}, source1, source2)
const result3 = {...source1, ...source2}

console.log(target)    // {a: 1, b: 3, c: 5, d: 6}
console.log(result1)   // {a: 1. b: 3, c: 5, d: 6}
console.log(result2)   // {b: 3, c: 5, d: 6}
console.log(result3)   // {b: 3, c: 5, d: 6}

// Object.entries()
// 주어진 객체의 각 속성과 값으로 하나의 배열 만들어 요소로 추가한 2차원 배열을 반환

const user1 = {
  name: 'Heropy',
  age: 85,
  isValid: true,
  email: 'thesecon@gmail.com',
}

console.log(Object.entries(user1))  // [['name', 'Heropy], ['age', 85], ['isValid', true], ['email', 'thesecon@gmail.com']]

for (const [key, value] of Object.entries(user1)) {
  console.log(key, value)   // name Heropy age 85 isValid true email thesecon@gmail.com
}

// Object.keys()
// 주어진 객체의 속성 이름을 나열한 배열을 반환

const user2 = {
  name: 'Heropy',
  age: 85,
  isValid: true,
  email: 'thesecon@gmail.com',
}

console.log(Object.keys(user2))   // ['name', 'age', 'isValid', 'email']

// Object.values()
// 주어진 객체의 속성 값을 나열한 배열을 반환

const user3 = {
  name: 'Heropy',
  age: 85,
  isValid: true,
  email: 'thesecon@gmail.com',
}

console.log(Object.values(user3))   // ['Heropy', 85, true, 'thesecon@gmail.com']

