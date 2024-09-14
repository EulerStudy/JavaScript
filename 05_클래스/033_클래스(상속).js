// 상속(Inheritance)

// 운송수단
class Vehicle {
  constructor(acceleration = 1) {
    this.speed = 0
    this.acceleration = acceleration
  }
  accelerate() {
    this.speed += this.acceleration
  }
  decelerate() {
    if (this.speed <= 0) {
      console.log('정지!')
      return
    }
    this.speed -= this.acceleration
  }
}

// 자전거
class Bicycle extends Vehicle {
  constuctor(price = 100, acceleration) {
    super(acceleration)   // super는 부모의 constructor
    this.price = price
    this.wheel = 2
  }
}

const bicycle = new Bicycle(300, 2)
bicycle.accelerate()
bicycle.accelerate()
console.log(bicycle)    // {speed: 2, acceleration: 2, price: 300, wheel: 2}
console.log(bicycle instanceof Bicycle)   // true
console.log(bicycle instanceof Vehicle)   // true

// 자동차
class Car extends Bicycle {
  constructor(license, price, acceleration) {
    super(price, acceleration)
    this.license = license
    this.wheel = 4
  }
  // 오버라이딩(overinding)
  accelerate() {
    if (!this.license) {
      console.error('무면허!')
      return
    }
    this.speed += this.acceleration
    console.log('가속!', this.speed)
  }
}

const carA = new Car(true, 7000, 10,)
const carB = new Car(false, 4000, 6)
carA.accelerate()
console.log(carA)   // {acceleration: 10, license: true, price: 7000, speed: 10, wheel: 4}
console.log(carB)   // {acceleration: 6, license: false, price: 4000, speed: 0, wheel: 4}
console.log(carA instanceof Car)    // true
console.log(carB instanceof Car)    // true
console.log(carA instanceof Bicycle)    // true
console.log(carB instanceof Bicycle)    // true
console.log(carA instanceof Vehicle)    // true
console.log(carB instanceof Vehicle)    // true

class Boat extends Vehicle {
  constructor(price, acceleration) {
    super(acceleration)
    this.price = price
    this.motor = 1
  }
}

const boat = new Boat(10000, 5)
console.log(boat)   // {speed:0, acceleration: 5, price: 10000, speed: 0}
console.log(boat instanceof Boat)     // true
console.log(boat instanceof Vehicle)  // true
console.log(boat instanceof Bicycle)  // false