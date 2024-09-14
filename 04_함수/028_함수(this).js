// this
// 일반 함수의 this는 호출 위치에서 정의
// 화살표 함수의 this는 자신이 선언된 함수(렉시컬) 범위에서 정의
// 렉시컬(Lexical)이란 함수가 동작할 수 있는 유효한 범위를 의미한다.
const userA = {
  firstName: 'Heropy',
  lastNmae: 'Park',
  age: 85,
  getFullName: function() {
    return `${this.firstName} ${this.lastNmae}`   // 여기서 this는 user를 말함
    // return `${userA.firstName} ${userA.lastNmae}`   // 위에와 같은 결과
  }
}

console.log(userA.getFullName())   // Heropy Park
// .getFullname 앞에 userA가 this가 된다.

const userB = {
  firstName: 'Heropy',
  lastNmae: 'Park',
  age: 85,
  getFullName: () => {
    return `${this.firstName} ${this.lastNmae}`
  }
}

console.log(userA.getFullName())   // undefined undefined

function userC() {
  this.firstName = 'Neo'
  this.lastNmae = 'Anderson'
  return {
    firstName: 'Heropy',
    lastNmae: 'Park',
    age: 85,
    getFullName: () => {
      return `${this.firstName} ${this.lastNmae}`
    }
  }
}

const u = userC()
console.log(u.getFullName())    // Neo Anderson

function userD() {
  this.firstName = 'Neo'
  this.lastNmae = 'Anderson'
  return {
    firstName: 'Heropy',
    lastNmae: 'Park',
    age: 85,
    getFullName1: function () {
      return `${this.firstName} ${this.lastNmae}`
    },
    getFullName2() {    // 일반함수일 경우 위의 경우 메소드를 아래와 같이 축약할 수 있음
      return `${this.firstName} ${this.lastNmae}`
    }
  }
}

const lewis = {
  firstName: 'Lewis',
  lastName: 'Yang',
}

const v = userD()
console.log(v.getFullName2())    // Heropy Park

// 메소드를 빌려서 사용함. 즉, 일반함수는 다른 객체에 붙여서 사용하는 것도 가능함
console.log(v.getFullName1.call(lewis))   // Lewis Yang

///

const timer1 = {
  title: 'TIMER!',
  timeout() {
    console.log(this.titie)
    setTimeout(function() {
      console.log(this.title)
    }, 1000)
  }
}

timer1.timeout()   // TIMER! undefined

const timer2 = {
  title: 'TIMER!',
  timeout() {
    console.log(this.titie)
    setTimeout(() => {
      console.log(this.title)   // timeout() 함수의 this가 this
    }, 1000)
  }
}

timer2.timeout()   // TIMER! TIMER!