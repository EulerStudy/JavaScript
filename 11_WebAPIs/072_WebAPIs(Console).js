// console
// .log(), .warn(), .error(), .dir()
// 콘솔에 메시지나 객체를 출력
// - log: 일반 메시지
// - warn: 경고 메시지
// - error: 에러 메시지
// - dir: 속성을 볼 수 있는 객체를 출력

console.log(document.body)
console.warn(document.body)
console.error(document.body)
console.dir(document.body)      // body

// .count, .countReset()
// 콘솔에 메소드 호출의 누적 횟수를 출력하거나 초기화한다.
// console.count('이름')
// console.countReset('이름')

console.count('a')      // a: 1
console.count('a')      // a: 2
console.count('b')      // b: 1
console.count('a')      // a: 3
console.log('Reset a!') // Reset a!
console.countReset('a')
console.count('a')      // a: 1
console.count('b')      // b: 2
console.count()   // default: 1

// .time(), .timeEnd()
// 콘솔에 타이머가 시작해서 종료되기까지의 시간(ms)를 출력
// console.time('이름')
// console.timeEnd('이름')

console.time('반복문')  // 반복문
for(let i = 0; i < 10000 ; i += 1) {
  console.log(i)
}
console.timeEnd('반복문')  // 반복문: 146.18603515625 ms

// .trace()
// 메소드 호출 스택(Call Stack)을 추적해 출력

function a() {
  function b() {
    function c() {
      console.log('Log!')
      console.trace('Trace!')     // Trace!
    }                             // c    @main.js:10
    c()                           // b    @main.js:12
  }                               // a    @main.js:14
  b()                             // 익명 @main.js:16
}
a()

// .clear()
// 콘솔에 기록된 메시지를 모두 삭제

console.log(1)
console.log(2)
console.log(3)

// 서식문자 치환
// %s - 문자로 적용
// %o - 객체로 적용
// %c - CSS를 적용

const a = 'The brown fox'
const b = 3
const c = {
  f: 'fox',
  d: 'dog',
}
console.log('%s jumps over the lazy dog %s times. %s', a, b, 123) // The brown fox jumps over the lazy dog 3 times. 123
console.log('%o is Object!', c)   // {f: 'fox', d: 'dog'} is Object!
console.log(
  '%cThe brown fox %cjumps over %cthe lazy dog.',
  'color: bronw; font-family: serif; font-size: 20px',
  '',
  'font-size: 18px; color: #FFF; background-color: green; border-radius: 4px;'
)