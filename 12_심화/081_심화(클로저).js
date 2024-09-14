// 클로저(Closure)
// 함수가 선언될 때의 유효범위(렉시컬 범위)를 기억하고 있다가,
// 함수가 외부에서 호출될 때 그 유효범위의 특정 변수를 참조할 수 있는 개념을 말한다.

function createCount() {
  let a = 0
  return function () {
    return a += 1
  }
}

const count1 = createCount()

console.log(count1())  // 1
console.log(count1())  // 2
console.log(count1())  // 3

const count2 = createCount()

console.log(count2())  // 1
console.log(count2())  // 2

///
function createCount2(callback) {
  let count = 0
  return function() {
    count += 1
    callback(count)
  }
}

const myCounter = createCount2(function(currentCount) {
  console.log('현재 카운트:', currentCount)
})
myCounter()

/*
<body>
  <h1>Hello World!</h1>
  <h2>Hello World!</h2>
</body>
*/

const h1El = document.querySelector('h1')
const h2El = document.querySelector('h1')

// 별도의 상태관리가 필요
let h1IsRed = false
let h2IsRed = false

h1El.addEventListener('click', event => {
  h1IsRed = !h1IsRed
  h1El.style.color = h1IsRed ? 'red' : 'black'
  // event.targe.style.color = h1IsRed ? 'red' : 'black'
})
h1El.addEventListener('click', event => {
  h2IsRed = !h2IsRed
  h2El.style.color = h2IsRed ? 'red' : 'black'
  // event.targe.style.color = h2IsRed ? 'red' : 'black'
})

// 클로저를 통해 상태 관리

const createToggleHandler = () => {
  let isRed = false
  return event => {
    isRed = !isRed
    event.target.style.color = isRed ? 'red' : 'black'
  }
}

h1El.addEventListener('click', createToggleHandler())
h2El.addEventListener('click', createToggleHandler())


