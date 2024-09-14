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
  <input />
</body>
*/
// 이벤트 객체
// 이벤트 객체는 대상에서 발생한 이벤트 정보를 담고 있다.
const parentEl1 = document.querySelector('.parent')
parentEl2.addEventListener('click', event => {
  // target: 클릭한 부분의 요소
  // currentTarget: 이벤트가 등록된 타겟
  console.log(event.target, event.currentTarget)  // <div class="child">...</div> <div class="parent">...</div>
})
parentEl2.addEventListener('wheel', event => {
  console.log(event)
})

const inputEl1 = document.querySelector('input')
inputEl1.addEventListener('keydown', event => {
  console.log(event.key)
})