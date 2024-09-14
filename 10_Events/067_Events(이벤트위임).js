/*
<body>
  <div class="parent">
    <div class="child">1</div>
    <div class="child">2</div>
    <div class="child">3</div>
    <div class="child">4</div>
  </div>
</body>
*/

// 이벤트 위임(Delegation)
// 비슷한 패턴의 여러 요소에서 이벤트를 핸들링해야 하는 경우,
// 단일 조상 요소에서 제어하는 이벤트 위임 패턴을 사용할 수 있다.

const parentEl1 = document.querySelector('.parent')
const childEls = document.querySelectorAll('.child')

// 모든 대상 요소에 이벤트 등록
childEls.forEach(el => {
  el.addEventListener('click', event => {
    console.log(event.target.textCotent)
  })
})

// 조상 요소에 이벤트 위임
parentEl1.addEventListener('click', event => {
  const childEl1 = event.target.closet('.child') 
  if (childEl1) {
    console.log(childEl1.textCotent)
  }
})
    