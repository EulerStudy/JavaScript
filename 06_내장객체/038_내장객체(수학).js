// Math.abs()
// 주어진 숫자의 절댓값을 반환

console.log(Math.abs(2))    // 2
console.log(Math.abs(2))    // 2

// Math.ceil()
// 주어진 숫자를 올림해 정수를 반환
console.log(Math.ceil(3.1415926525))    // 4

// Math.floor()
// 주어진 숫자를 내림해 정수를 반환
console.log(Math.floor(3.1415926525))   // 3

// Math.max()
// 주어진 숫자 중 가장 큰 숫자를 반환
console.log(Math.max(1, 22, 38, 192))   // 192

// Math.min()
// 주어진 숫자 중 가장 작은 숫자를 반환
console.log(Math.min(1, 22, 38, 192))   // 1

// Math.pow()
// 주어진 숫자의 거듭제곱한 값을 반환
console.log(Math.pow(4, 2))     // 16
console.log(Math.pow(7, 2))     // 49
console.log(Math.pow(10, 3))    // 1000

// Math.random()
// 숫자 0 이상, 1 미만의 난수를 반환
console.log(Math.random())      // 0.711243871246835

// 특정 범위의 랜덤 정수를 얻는 함수
function random(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min)) + min
}

console.log(random())          // 2 
console.log(random(11, 20))    // 18
console.log(random(101, 999))  // 333

// Math.round()
// 주어진 숫자를 반올림해 정수를 반환
const num1 = 3.141
const num2 = 3.768
console.log(Math.round(num1))   // 3
console.log(Math.round(num2))   // 4