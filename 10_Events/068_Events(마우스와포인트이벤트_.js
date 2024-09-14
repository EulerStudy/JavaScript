/*
<style>
  .parent {
    width: 300px;
    height: 200px;
    padding: 20px;
    border: 10px splid;
    background-color: red;
    overflow: auto;
  }
  .child {
    width: 200px;
    height: 1000px;
    border: 10px solid;
    background-color: orange;
  }
  .child.active {
    background-color: yellowgreen;
  }
</style>
<body>
  <div class='parent'>
    <div class='child>
    </div>
  </div>
</body>
*/

// Mouse & Pointer Events

// click        | 클릭했을 때
// dblclick     | 더블 클릭했을 때
// mousedown    | 버튼을 누를 때
// mouseup      | 버튼을 땔 때
// mouseenter   | 포인터가 요소 위로 들어갈 때
// mouseleave   | 마우스를 요소 밖으로 나올 때
// mousemove    | 포인터가 움직일 때
// contextmenu  | 우클릭했을 때
// wheel        | 휠 버튼이 회전할 때

const parentEl1 = document.querySelector('.parent')
const childEl1 = document.querySelector('.child')

childEl1.addEventListener('click', () => {
  childEl1.classList.toggle('active')
})
childEl1.addEventListener('mousedown', () => {
  childEl1.classList.add('active')
})
childEl1.addEventListener('mouseup', () => {
  childEl1.classList.remove('active')
})
childEl1.addEventListener('mousemove', event => {
  console.log(event)    // MouseEvent {isTrusted: true, screenX: 15461, screenY: 352, clientX: 141, clientY: 241, ...}
  console.log(event.offsetX, event.offsetY)
})
childEl1.addEventListener('contextment', event => {
  console.log(event)    // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 141, pressure: 0, ...}
  event.preventDefault()    // 마우스 우클릭 메뉴 방지
})
parentsl1.addEventListener('wheel', event => {
  console.log(event)    // WheelEvent {isTrusted: true, deltaX: -0, deltaY: 13, deltaZ: 0, deltaMode: 0, ...}
})