// .join()
// 대상 배열의 모든 요소를 구분자로 연결한 문자를 반환
// 구분자 defulit ','

const arr1 = ['Apple', 'Banana', 'Cherry']
console.log(arr1.join())      // Apple,Banana,Cherry
console.log(arr1.join(', '))  // Apple, Banana, Cherry
console.log(arr1.join('/'))   // Apple/Banana/Cherry

// .map()
// 대상 배열의 길이만큼 주어진 콜백을 실행하고, 콜백의 반환 값을 모아 새로운 배열을 반환

const numbers1 = [1, 2, 3, 4]
const newNumbers1 = numbers1.map(item => item * 2)
console.log(newNumbers1)    // [2, 4, 6, 8]

const users1 = [
  { name: 'Neo', age: 85 },
  { name: 'Amy', age: 22 },
  { name: 'Lewis', age: 11 },
]

const newUsers = users1.map(user => {
  return {
    ...user,
    isValid: true,
    email: null,
  }
})

// { name: 'Neo', age: 85, isValid: true, email: null }, 
// { name: 'Amy', age: 22, isValid: true, email: null }, 
// { name: 'Lewis', age: 11, isValid: true, email: null },
console.log(newUsers)

// .pop()
// 대상 배열에서 마지막 요소를 제거하고 그 요소를 반환
// 대상 배열 원본이 변경된다.

const fruits1 = ['Apple', 'Banana', 'Cherry']
console.log(fruits1.pop())   // Cherry
console.log(fruits1)         // ['Apple', 'Banana']

// .push()
// 대상 배열의 마지막에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환
// 대상 배열의 원본이 변경된다.

const fruits2 = ['Apple', 'Banana', 'Cherry']

const newLength = fruits2.push('Orange')
console.log(newLength)    // 4
console.log(fruits)   // ['Apple', 'Banana', 'Cherry', 'Orange']

fruits2.push('Mango', 'Strawberry')
console.log(fruits)   // ['Apple', 'Banana', 'Cherry', 'Orange', 'Mango', 'Strawberry']

// .reduce()
// 대상 배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜백의 반환 값을 반환
// 각 콜백의 반환 값은 다음 콜백으로 전달

const numbers2 = [1, 2, 3]
const sum = numbers2.reduce((acc, cur) => acc + cur, 0)

console.log(sum)    // 6

const users2 = [
  { name: 'Neo', age: 85 },
  { name: 'Amy', age: 22 },
  { name: 'Lewis', age: 11 },
]

// 총 나이 계산
const totalAge = users2.reduce((acc, cur) => acc + cur.age, 0)
console.log(totalAge)   // 118

// 모든 이름 추출
const names = users.reduce((acc, cur) => {
  acc.push(cur.name)
  return acc
}, []).join(', ')
console.log(names)    // Neo, Amy, Lewis