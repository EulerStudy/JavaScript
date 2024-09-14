// 호출 스케줄링(Scheduling a function call)

const hello = () => {
  console.log('Hello')
}
const timeout1 = setTimeout(hello, 2000)    // 2초후 실행
const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  console.log('clear')
  clearTimeout(timeout1)   // h1 태그를 클릭하면 timeout 해제 
})

const timeout2 = setInterval(hello, 2000)   // 2초마다 실행
const h2El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  console.log('clear')
  clearInterval(timeout2)   // h2 태그를 클릭하면 interval 해제 
})
