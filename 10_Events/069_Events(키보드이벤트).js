/*
<body>
  <input type="text" />
</body>
*/

// keyboard Events
// keydown    | 키를 누를 때
// keydup     | 키를 땔 때

const inputEl1 = document.querySelector('input')
inputEl1.addEventListener('keydown', event => {
  console.log(event.key)
  if (event.key == 'Enter') {
    console.log(event.target.value)   // abc, 한글,중국어,일어는 2번의 이벤트가 발생해서 2번 출력
    console.log(event.isComposing)    // cjk문자가 처리중인지 true, false
    if (!event.isComposing) {
      console.log(event.target.value) // 이러면 1번의 이벤트만 처리
    }
  }
})