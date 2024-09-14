// prototype

//const fruits = ['Apple', 'Banana', 'Cherry']
const fruits = new Array('Apple', 'Banana', 'Cherry')
console.log(fruits)   // ['Apple', 'Banana', 'Cherry']
console.log(fruits.length)    // 3
console.log(fruits.includes('Banana'))    // true

Array.prototype.heropy = function() {
  console.log(this)
}

fruits.heropy()   // ['Apple', 'Banana', 'Cherry']

const arr = []
arr.heropy()      // []

///

const heropy = {
  firstName: 'Heropy',
  lastName: 'Park',
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
const neo = {
  firstName: 'Neo',
  lastName: 'Anderson',
}

console.log(heropy.getFullName())   // Heropy Park
console.log(heropy.getFullName.call(neo))   // Neo Anderson

//

function User(first, last) {
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function() {   // 주의할점: this라는 표현이 달라지기 때문에 화살표함수를 쓰면 안된다.
  return `${this.firstName} ${this.lastName}`
}

const h1 = new User('Heropy', 'Park')
const n1 = new User('Neo', 'Anderson')
console.log(h1)   // { firstName: 'Heropy', lastName: 'Park' }
console.log(n1)   // { firstName: 'Neo', lastName: 'Anderson' }
console.log(h1.getFullName())   // Heropy Park
console.log(n1.getFullName())   // Neo Anderson

