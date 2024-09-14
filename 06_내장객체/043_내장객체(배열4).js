// .reverse()
// 대상 배열의 순서를 반전
// 대상 배열 원본이 변경

const arr1 = ['A', 'B', 'C']
const reversed = arr1.reverse()
console.log(reversed)   // ['C', 'B', 'A']
console.log(arr1)       // ['C', 'B', 'A']

// .shift()
// 대상 배열에서 첫 번째 요소를 제고하고, 제거된 요소를 반환
// 대상 배열 원본이 변경

const arr2 = ['A', 'B', 'C']
console.log(arr2.shift())   // A
console.log(arr2)   // ['B', 'C']

// .slice()
// 대상 배열의 일부를 추출해 새로운 배열을 반환
// 두 번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 배열의 끝까지 추출

const arr3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
console.log(arr3.slice(0, 3))     // ['A', 'B', 'C]
console.log(arr3.slice(4, -1))    // ['E', 'F']
console.log(arr3.slice(4))        // ['E', 'F', 'G']
console.log(arr3)   // ['A', 'B', 'C', 'D', 'E', 'F', 'G']

// .some()
// 대상 배열의 어떤 요소라도 콜백 테스트를 통과하는지 확인

const arr4 = [1, 2, 3, 4]
const isValid = arr4.some(item => item > 3)
console.log(isValid)    // true

// .sort()
// 대상 배열을 콜백의 반환 값(음수, 양수, 0)에 따라 정렬한다.
// 콜백을 제공하지 않으면, 요소를 변환하고 유니코드 코드 포인트 순서로 정렬한다.
// 대상 배열 원본이 변경된다.

const numbers1 = [4, 17, 2, 103, 3, 1, 0]
numbers1.sort()
console.log(numbers1)   // [0, 1, 103, 17, 2, 3, 4]

numbers1.sort((a, b) => a - b)
console.log(numbers1)   // [0, 1, 2, 3, 4, 17, 103]

numbers1.sort((a, b) => b - a)
console.log(numbers1)   // [103, 17, 4, 3, 2, 1, 0]

const users1 = [
 ,
  { name: 'Amy', age: 22 },
  { name: 'Lewis', age: 11 },
]

users.sort((a, b) => a.age - b.age)
console.log(users1)   // [{ name: 'Lewis', age: 11 }, { name: 'Amy', age: 22 }, { name: 'Neo', age: 85 }]

users.sort((a, b) => b.age - a.age)
console.log(users1)   // [{ name: 'Neo', age: 85 }, { name: 'Amy', age: 22 }, { name: 'Lewis', age: 11 }]

// .splice()
// 대상 배열에 요소를 추가하거나 삭제하거나 교체한다.
// 대상 배열 원본이 변경된다.

const arr5 = ['A', 'B', 'C']
arr5.splice(2, 0, 'X')
console.log(arr5)    // ['A', 'B', 'X', 'C']

const arr6 = ['A', 'B', 'C']
arr6.splice(1, 1)
console.log(arr6)   // ['A', 'C']

const arr7 = ['A', 'B', 'C']
arr7.splice(1, 2, 'X', 'Y')
console.log(arr7)   // ['A', 'X', 'Y']

const arr8 = ['A', 'B', 'C']
arr8.splice(1, 1, 'X')
console.log(arr88)   // ['A', 'X', 'C']

// .unshift()
// 새로운 요소를 대상 배열의 맨 앞에 추가하고 새로운 배열 길이를 반환
// 대상 배열 원본이 변경된다.

const arr9 = ['A', 'B', 'C']
console.log(arr9.unshift('X'))    // 4
console.log(arr9)   // ['X', 'A', 'B', 'C']

// Array.from()
// 유사 배열(Array-link)를 실제 배열로 반환

const arraylike1 = {
  0: 'A',
  1: 'B',
  2: 'C',
  length: 3
}

console.log(arraylike1.constructor === Array)    // false
console.log(arraylike1.constructor === Object)   // true
Array.from(arraylike1).forEach(item => console.log(item))    // A B C

// Array.isArray()
// 배열 데이터인지 확인

const arr10 = ['A', 'B', 'C']
const arraylike2 = {
  0: 'A',
  1: 'B',
  2: 'C',
  length: 3
}
console.log(Array.isArray(arr10))         // true
console.log(Array.isArray(arraylike2))    // false