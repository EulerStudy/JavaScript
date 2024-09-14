// .length
// 배열의 길이(숫자)를 반환

const arr1 = ['A', 'B', 'C']
console.log(arr1.length)    // 3

// .at()
// 대상 배열을 인덱싱한다.
// 음수 값을 사용하면 뒤에서부터 인덱싱한다.

console.log(arr1[0])                // A
console.log(arr1.at(0))             // A
console.log(arr1[arr1.length - 1])  // C
console.log(arr1.at(-1))            // C

// .concat()
// 대상 배열과 주어진 배열을 병합해 새로운 배열을 반환

const arr2 = ['D', 'E', 'F']
const arr3 = arr1.concat(arr2)
const arr4 = [...arr1, ...arr2]
console.log(arr1)   // ['A', 'B', 'C]
console.log(arr2)   // ['D', 'E', 'F]
console.log(arr3)   // ['A', 'B', 'C', 'D', 'E', 'F']
console.log(arr4)   // ['A', 'B', 'C', 'D', 'E', 'F']

// .every()
// 대상 배열의 모든 요소가 콜백 테스트에서 참(Trusy)를 반환하는지 확인

const arr5 = [1, 2, 3, 4]
const isValid = arr5.every(item => item < 5)
console.log(isValid)    // true

// .filter()
// 주어진 콜백 테스트를 통과(참(Truthy)을 반환)하는 모든 요소를 새로운 배열로 반환
// 모든 요소가 테스트를 통과하지 못하면 빈 배열을 반환

const numbers1 = [1, 20, 7, 9, 104, 0, 50]
const filteredNumbers = numbers1.filter(number => number < 30)
console.log(filteredNumbers)    // [1, 20, 7, 9, 0]

const users = [
  { name: 'Neo', age: 85 },
  { name: 'Amy', age: 22 },
  { name: 'Lewis', age: 11 },
]
const adults = users.filter(user => user.age >= 19)
console.log(adults)   // [{ name: 'Neo', age: 85 }, { name: 'Amy', age: 22 }]
