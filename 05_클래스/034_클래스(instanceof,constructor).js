class A {
  constructor () {}
}
class B extends A {
  constructor () {
    super()
  }
}
class C extends B {
  constructor () {
    super()
  }
}

const a = new A()
const b = new B()
const c = new C()

console.log(a instanceof A)   // true
console.log(a instanceof B)   // false
console.log(a instanceof C)   // false

console.log(b instanceof A)   // true
console.log(b instanceof B)   // true
console.log(b instanceof C)   // false

console.log(c instanceof A)   // true
console.log(c instanceof B)   // true
console.log(c instanceof C)   // true

console.log(c.constructor === A)   // false
console.log(c.constructor === B)   // false
console.log(c.constructor === C)   // true

const fruitsA = ['Apple', 'Banana']
console.log(fruitsA.constructor === Array)   // true
console.log(fruitsA instanceof Array)    // true

const fruitsB = new Array('Apple', 'Banana')
console.log(fruitsB.constructor === Array)   // true