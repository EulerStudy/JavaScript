/*
<style>
  body {
    height: 1000px;
    padding: 500px 0;
  }
  .parent {
    width: 300px;
    height: 200px;
    margin-top: 1000px;
    padding: 20px;
    overflow: auto;
    border: 10px solid;
  }
  .child {
    height: 100px;
    margin-top: 100px;
    border: 10px solid red;
  }
</style>
<body>
  <div class="parent">
    <div class="child">1</div>
    <div class="child">2</div>
  </div>
</body>
*/

// window.innerWidth / window.innerHeight
// 현재 화면(Viewprt)의 크기를 얻는다.

console.log(window.innerWidth)      // 500
console.log(window.innerHeight)     // 150

// window.scrollX / window.scrollT
// 페이지의 최상단 기준, 현재 화면(Viewport)의
// 수평 혹은 수직 스크롤 위치를 얻는다.

console.log(window.scrollX, window.scrollY)   // 0 1417

// window.scrollTo() / E.scrollTo()
// 지정된 좌표로 대상(화면, 스크롤 요소)를 스크롤 한다.
// 대상.scorllTo(X좌표, Y좌표)
// 대상.scrollTo({top: Y, left: X, behavior: 'smooth'})

const parentEl1 = document.querySelector('.parent')
setTimeout(() => {
  window.scrollTo(0, 500)
  window.scrollTo({
    left: 0,
    top: 500,
    behavior: 'smooth',
  })
  parentEl1.scrollTo({
    left: 0,
    top: 500,
    behavior: 'smooth',
  })
}, 1000)

// E.clientWidth / E.clientHeight
// 테두리 선(border)를 제외한 요소의 크기를 얻는다.

const parentEl2 = document.querySelector('.parent')
const childEl2 = document.querySelector('child')

console.log(parentEl2.clientWidth, parentEl2.clientHeight)    // 325 240, 스크롤바의 너비도 제외
console.log(childEl2.clientWidth, childEl2.clientHeight)    // 265 100

// E.offsetWidth / E.offsetHeight
// 테두리 선(border)를 포함한 요소의 크기를 얻는다.

const parentEl3 = document.querySelector('.parent')
const childEl3 = document.querySelector('.child')

console.log(parentEl3.offsetWidth, parentEl2.offsetHeight)  // 360 260
console.log(childEl3.offsetWidth, childEl3.offsetHeight)    // 285 120

// E.scrollLeft / E.scrollTop
// 스크롤 요소의 좌상단 기준,
// 현재 스크롤 요소의 수평 혹은 수직 스크롤 위치를 얻는다.

window.parentEl = document.querySelector('.parent')
console.log(parentEl.scrollLeft, parentEl.scrollTop) // 코드를 복사해서 개발자 모드에 넣기

// E.offsetLeft / E.offsetTop
// 페이지 최상단 기준, 요소의 위치를 얻는다.

const parentEl4 = document.querySelector('.parent')
const childEl4 = document.querySelector('.child')
console.log(parentEl4.offsetLeft, parentEl4.offsetTop)  // 8 1508
console.log(childEl4.offsetLeft, childEl4.offsetTop)    // 38 1638

// E.getBoundingClientRect()
// 테두리 선(border)을 포함한 요소의 크기와
// 화면에서의 상대 위치 정보를 얻는다.

const parentEl5 = document.querySelector('.parent')
const childEl5 = document.querySelector('.child')

console.log(parentEl5.getBoundingClientRect())  // DOMRect {x: 8, y: 280, width: 360, height:260, top: 70, ...}
console.log(childEl5.getBoundingClientRect())   // DOMRect {x: 38, y: 280, width: 285, height:120, top: 200, ...}



