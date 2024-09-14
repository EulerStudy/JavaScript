// .find()
// 대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소를 반환

const arr1 = [5, 8, 130, 12, 44]
const foundItem = arr1.find(item => item > 10)
console.log(foundItem)    // 130

const users1 = [
  { name: 'Neo', age: 85 },
  { name: 'Amy', age: 22 },
  { name: 'Lewis', age: 11 },
]

const foundUser = users1.find(user => user.name === 'Amy')
console.log(foundUser)    //  { name: 'Amy', age: 22 }

// .findIndex()
// 대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소의 인덱스를 반환

const arr3 = [5, 8, 130, 12, 44]
const index = arr1.findIndex(item => item > 10)
console.log(index)    // 2

// .flat()
// 대상 배열의 모든 하위 배열을 지정한 깊이(Depth)까지 이어붙인 새로운 배열을 생성
// 길이의 기본값은 `1`이다.

const arr4 = [1, 2, [3, 4]]
console.log(arr4.flat())    // [1, 2, 3, 4]

const arr5 = [1, 2, [3, 4, 5, 6]]
console.log(arr5.flat(2))   // [1, 2, 3, 4, 5, 6]

const arr6 = [1, 2, [3, 4, [5, 6, [7, 8]]]]
console.log(arr6.flat())    // [1, 2, 3, 4, [5, 6, [7, 8]]]
console.log(arr6.flat(1))   // [1, 2, 3, 4, [5, 6, [7, 8]]]
console.log(arr6.flat(2))   // [1, 2, 3, 4, 5, 6, [7, 8]]
console.log(arr6.flat(Infinity))   // [1, 2, 3, 4, 5, 6, 7, 8]

// .forEach()
// 대상 배열 길이만큼 주어진 콜백을 실행

const arr7 = ['A', 'B', 'C']
arr6.forEach(item => console.log(item))   // A B C

// forEach는 반복을 멈출 수 없음
// 하지만 for문은 필요할 경우 중간에 종료할 수 있다.

for(let i = 0; i < arr7.length; i += 1) {
  if (i > 1) {
    break
  }
  console.log(arr7[i])    // A B
}

// .includes()
// 대상 배열이 특정 요소를 포함하고 있는지 확인

const arr8 = [1, 2, 3]
console.log(arr8.includes(2))   // true

const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits.includes('Apple'))     // true
console.log(fruits.includes('cherry'))    // false

const users = [
  { name: 'Neo', age: 85 },
  { name: 'Amy', age: 22 },
  { name: 'Lewis', age: 11 },
]
// 객체,배열은 참조형이다. 생긴것은 같더라도 다른 데이터로 판단할 수 있다.
console.log(users.includes( { name: 'Neo', age: 85 }))   // false

const neo = users[0]
console.log(users.includes(neo))    // true
