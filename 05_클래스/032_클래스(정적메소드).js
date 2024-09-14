// 정적 메소드(Static Method)

class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
  static isUser(user) {
    if (user.firstName && user.lastName) {
      return true
    }
    return false
  }
}

const heropy = new User('Heropy', 'Park')
const neo = new User('Neo', 'Anderson')
const lewis = {
  name: 'Lewis Yang',
  age: 85,
}
console.log(heropy.getFullName())   // Heropy Park
console.log(neo.getFullName())      // Neo Anderson
console.log(User.isUser(heropy))    // true
console.log(User.isUser(neo))       // true
console.log(User.isUser(lewis))     // false