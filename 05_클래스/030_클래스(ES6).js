// ES6 Classes

function User(first, last) {
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
} 

const heropy = new User('Heropy', 'Park')
console.log(heropy)   // { firstName: 'Heropy', lastName: 'Park' }

const neo = new User('Neo', 'Anderson')
console.log(neo)      // { firstName: 'Neo', lastName: 'Anderson' }

console.log(heropy.getFullName())   // Heropy Park
console.log(neo.getFullName())      // Neo Anderson

///

class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const h1 = new User('Heropy', 'Park')
console.log(h1)   // { firstName: 'Heropy', lastName: 'Park' }

const n1 = new User('Neo', 'Anderson')
console.log(n1)      // { firstName: 'Neo', lastName: 'Anderson' }

console.log(h1.getFullName())   // Heropy Park
console.log(n1.getFullName())   // Neo Anderson