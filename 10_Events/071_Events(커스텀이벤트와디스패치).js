/*
<body>
  <div class='parent>
    <div class='child1'>1</div>
    <div class='child2'>1</div>
  </div>
</body>

*/

// 커스텀 이벤트와 디스패치

const child1 = document.querySelector('.child:nth-child(1)')
const child2 = document.querySelector('.child:nth-child(2)')

child1.addEventListener('click', event => {
  // 강제로 이벤트 발생
  child2.dispatchEvent(new Event('click'))
  child2.dispatchEvent(new Event('wheel'))
  child2.dispatchEvent(new Event('keydown'))
})
child2.addEventListener('click', event => {
  console.log('Child2 Click!')
})
child2.addEventListener('wheel', event => {
  console.log('Child2 Wheel!')
})
child2.addEventListener('keydown', event => {
  console.log('Child2 Keydown!')
})

// 

const child3 = document.querySelector('.child:nth-child(1)')
const child4 = document.querySelector('.child:nth-child(2)')

child3.addEventListener('hello-world', event => {
  console.log('커스텀 이벤트 발생!')
  console.log(event.detail)   // undefined
})
child4.addEventListener('click', () => {
  child3.dispatchEvent(new Event('hello-world'))
})

//

const child5 = document.querySelector('.child:nth-child(1)')
const child6 = document.querySelector('.child:nth-child(2)')

child5.addEventListener('hello-world', event => {
  console.log('커스텀 이벤트 발생!')
  console.log(event.detail)   // undefined
})
child6.addEventListener('click', () => {
  child5.dispatchEvent(new Event('hello-world', {detail: 123}))
})

//

const child7 = document.querySelector('.child:nth-child(1)')
const child8 = document.querySelector('.child:nth-child(2)')

child8.addEventListener('hello-world', event => {
  console.log('커스텀 이벤트 발생!')
  console.log(event.detail)   // 123
})
child8.addEventListener('click', () => {
  child7.dispatchEvent(new CustomEvent('hello-world', {detail: 123}))
})
