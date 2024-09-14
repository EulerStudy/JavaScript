// 메모리 누수(Memory Leak)
// 더 이상 필요하지 않은 데이터가 제거되지 못하고 메모리를 계속 차지하는 현상
// - 불필요한 전역 변수 사용
// - 분리된 노드 참조
// - 제거되지 않은 타이머
// - 잘못된 클로저 사용

// 전역객체
window.hello = 'Hello World'
window.heropy = { name: 'Heropuy', age: 85}

/*
<body>
  <button>Remove!</button>
  <div class="parent">
    <div class="child">1</div>
    <div class="child">2</div>
  </div>
*/
const btn = document.querySelector('button')
const parent = document.querySelector('.parent')

btn.addEventListener('click', () => {
  console.log(parent)   // <div class="parent">...</div>
  parent.remove()
})

/// 해결책
const btn1 = document.querySelector('button')

btn.addEventListener('click', () => {
  const parent1 = document.querySelector('.parent')   // 없으면 null 반환
  console.log(parent1)   // <div class="parent">...</div>
  parent1 && parent1.remove()
})

/// 계속해서 setInterval이 실행됨
let a = 0
setInterval(() => {
  a += 1
}, 100)
setTimeout(()=>{
  console.log(a)
}, 1000)

// 해결책
let b = 0
const intervalId = setInterval(() => {
  b += 1
}, 100)
setTimeout(()=>{
  console.log(a)
  clearInterval(intervalId)
}, 1000)

///
const getFn = () => {
  let a = 0
  return name => {
    a += 1
    console.log(a)
    return `Hello ${name}~`
  }
}

const fn = getFn()
console.log(fn('Heropy'))   // Hello Heropy~
console.log(fn('Neo'))      // Hello Neo
console.log(fn('Lewis'))    // Hello Lewis

/// 해결책, 클로저가 되지 않게 필요없는 변수 함수내에서 제거
const getFn2 = () => {
  let a = 0
  return name => {
    return `Hello ${name}~`
  }
}

const fn2 = getFn2()
console.log(fn2('Heropy'))   // Hello Heropy~
console.log(fn2('Neo'))      // Hello Neo
console.log(fn2('Lewis'))    // Hello Lewis