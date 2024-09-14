// Object
// 1) 생성자 함수 방식
const userA = new Object()
userA.name = 'HEROPY'    // key:value 형태, 속성(property):값
userA.age = 85
console.log(userA)   // {name:'HEROPY', age: 85}

// 2) 함수 방식
function User() {
  this.name = 'HEROPY',
  this.age = 85  
}

const userB = new User()
console.log(userB)  // User {name:'HEROPY', age: 85}

// 3) 리터럴 방식
const userC = {     // key는 고유하고 순서가 따로 존재하지 않는다.
  name: 'HEROPY',
  age: 85,
}
console.log(userC)   // {name:'HEROPY', age: 85}
console.log(userC.name)     // 점표기법
console.log(userC['name'])  // 대괄호표기법

const key = 'name'
console.log(userC[key])

const userD = {
  name: 'Neo',
  age: 22,
  parent: userC
}

console.log(userD)                // {name:'Neo', age: 22, parent: {...}}
console.log(userD.parent)         // {name:'HEROPY', age: 85}
console.log(userD.parent.name)    // HEROPY
console.log(userD['parent'].name) // HEROPY
console.log(userD['parent']['name'])  // HEROPY


users = [userC, userD]
console.log(users[0].name)    // HEROPY
console.log(users[0]['name']) // HEROPY

