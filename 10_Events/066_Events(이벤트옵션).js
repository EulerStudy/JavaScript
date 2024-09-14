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

// 핸들러 한 번만 실행

const parentEl1 = document.querySelector('.parent')
parentEl1.addEventListener('click', event => {
  console.log('Parent!')
}, {once: true})

// 기본 동작과 핸들러 실행 분리

const parentEl2 = document.querySelector('.parent')
parentEl2.addEventListener('wheel', () => {
  for (let i = 0; i < 10000; i += 1) {
    console.log(i)
  }
}, {passive: true})


function main() {

}
document.addEventListener('DOMContentLoaded', main)   // 자바스크립트가 실행되면 main함수 호출