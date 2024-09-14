// Getter, Setter

class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  get fullName() {
    console.log('Getter')
    return `${this.firstName} ${this.lastName}`
  }
  set fullName(value) {
    console.log('Setter')
    console.log(value.split(' '))   // ['Neo', 'Anderson]
    ;[this.firstName, this.lastName] = value.split(' ')
  }
}

const heropy = new User('Heropy', 'Park')
console.log(heropy.fullName)   // Heropy Park

heropy.fullName = 'Neo Anderson'
console.log(heropy)   // { firstName: 'Neo', lastName: 'Anderson' }
