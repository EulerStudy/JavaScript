// 기본값(Default Value)

function sum(a, b = 0) {
  return a + b
}

console.log(sum(1, 2))    // 3
console.log(sum(7))       // 7

// 매개변수(Parameter Pattern)

const user = {
  name: 'HEROPY',
  age: 85,
}

function getName1(user) {
  return user.name
}

function getName2(user) {
  const { name } = user
  return name
}

function getName3({ name }) {
  return name
}

function getEmail1({ email }) {
  return email
}

function getEmail2({ email = '이메일이 없습니다'}) {
  return email
}

console.log(getName1(user))   // HEROPY
console.log(getName2(user))   // HEROPY
console.log(getName3(user))   // HEROPY
console.log(getEmail1(user))   // undefined
console.log(getEmail2(user))   // 이메일이 없습니다

const fruits = ['Apple', 'Banana', 'Cherry']
const numbers = [1, 2, 3, 4, 5, 6, 7]

function getSecondItem1(array) {
  return array[1]
}

function getSecondItem2([a, b, c]) {
  return b
}

function getSecondItem3([, b]) {
  return b
}

console.log(getSecondItem1(fruits))    // Banana
console.log(getSecondItem2(fruits))    // Banana
console.log(getSecondItem3(fruits))    // Banana
console.log(getSecondItem3(numbers))   // 2

// 나머지 매개변수(Rest Parameter)

function sum1(...rest) {
  console.log(rest)         // 배열로 출력함
  
  // arguments : 마치 배열 데이터처럼 생긴 유사 배열로 따로 지정하지 않아도 따로 쓸 수 있음, 
  // 하지만 배열 데이터가 아니기 때문에 reduce 메소드를 사용할 수 없음
  console.log(arguments)    

  return rest.reduce(function(acc, cur) {
    return acc + cur
  }, 0)   // 0은 acc의 초깃값
}

function sum2(a, b, ...rest) {
  console.log(rest)   // 첫 번째 값은 a에 두 번째 값은 b에, 나머지는 rest에 배열로 들어감
}


console.log(sum1(1, 2))    // 3
console.log(sum1(1, 2, 3, 4))    // 10
console.log(sum1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))   // 5