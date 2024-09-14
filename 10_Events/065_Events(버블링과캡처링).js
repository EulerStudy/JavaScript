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
    font-size: 40px;
  }
</style>
<body>
  <div class='parent'>
    <div class='child>
      <a href="https://heropy.blog" targe="_blank">
        HEROPY
      </a>
    </div>
  </div>
</body>
*/

// 이벤트 전파(버블) 정지

const parentEl1 = document.querySelector('.parent')
const childEl1 = document.querySelector('.child')
const anchorEl1 = document.querySelector('a')

window.addEventListener('click', event => {
  console.log('Window!')
})
document.body/addEventListener('click', event => {
  console.log('Body!')
}, {capture: true})   // 이벤트를 제일 먼저 실행 - 이벤트 캡처링
parentEl1.addEventListener('clicl', event => {
  console.log('Parent!')
  event.stopPropagation()   // 버블링정지
})
childEl1.addEventListener('click', event => {
  console.log('Child!')
})
anchorEl1.addEventListener('clikc', event => {
  console.log('Anchor!')
})

///

const parentEl2 = document.querySelector('.parent')

const handler = () => {
  console.log('Parent!')
}

parentEl2.addEventListener('click', handler, {capture: true})
// 이벤트를 제거할 때, 만일 추가한 이벤트에서 captuer가 되어 있다면
// 제거할 때도 capture 옵션이 있어야 한다.
parentEl2.removeEventListener('click', handler, {capture: true})