// 1) Boolean
const a = true
const b = false

if (a) {
  console.log('Hello')
}

// 2) null
let age = null  // 존재하지 않는다, 비워있다, 알 수 없다 (명시적)

console.log(age)  // null

setTimeout(function() {
  age = 85
  console.log(age)
}, 1000)


// 3) undefined
let age2    // 암시적

console.log(age2)  // undefined 변수에 값이 할당되지 않음

setTimeout(function() {
  age2 = 85
  console.log(age2)
}, 1000)

const user = {
  name: 'HEROPY',
  age: 85
}

console.log(user)       // {name:'HEROPY', age: 85}
console.log(user.name)  // HEROPY
console.log(user.age)   // 85
console.log(user.email) // undefined
