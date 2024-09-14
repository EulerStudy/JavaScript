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

// 기본 동작 방지
// 마우스 휠의 스크롤 동작 방지!
const parentEl1 = document.querySelector('.parent')
parentEl1.addEventListener('wheel', event => {
  event.preventDefault()
  console.log('Wheel!')
})

// <a> 태그에서 페이지 이동 방지
const anchorEl = document.querySelector('a')
anchorEl.addEventListener('click', event => {
  event.preventDefault()
  console.log('Click!')
})