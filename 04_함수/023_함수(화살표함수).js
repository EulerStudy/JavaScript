// 화살표 함수(Array function)

function sum1(a, b) {
  return a + b
}
const sum2 = (a, b) => {
  return a + b
}
const sum3 = (a, b) => a + b 

console.log(sum1(1, 2))     // 3
console.log(sum2(1, 2))     // 3
console.log(sum3(1, 2))     // 3

const a = () => {}
const b = x => {}       // 매개변수가 한 개만 있을 경우에 소괄호 생략 가능
const c = (x, y) => {}
const d = x => { return x * x }
const e = x => x * x
const f = x => {
  console.log(x * x)
  return x * x
}
const g = () => { return {a: 1}}
const h = () => ({a: 1})
const i = () => [1, 2, 3]