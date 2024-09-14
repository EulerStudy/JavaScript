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

// .addEventListener()
// 대상에 이벤트 청취(Listen)를 등록한다.
// 대상에 지정한 이벤트가 발생했을 때 지정한 함수(Handler)가 호출된다.

const parentEl1 = document.querySelector('.parent')
const childEl1 = document.querySelector('.child')

parentEl1.addEventListener('click', () => {
  console.log('Parent!')
})
childEl1.addEventListener('click', () => {
  console.log('Child!')
})

// .removeEventListener()
// 대상에 등록했던 이벤트 청취(Listen)를 제거
// 메모리 관리를 위해 등록한 이벤트를 제어하는 과정이 필요할 수 있다.

const parentEl2 = document.querySelector('.parent')
const childEl2 = document.querySelector('.child')

const handler = () => {
  console.log('Parent!')
}
parentEl2.addEventListener('click', handler)
childEl2.addEventListener('click', () => {
  parentEl2.removeEventListener('click', handler)
})