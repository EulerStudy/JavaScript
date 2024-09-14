/*
<style>
  form {
    padding: 10px;
    border: 4px solid transparent;
    display: flex;
    flex-wrap: wrap;
    gap: 60x;
  }
  form.active {
    border-color: orange;
  }
</style>
<body>
  <form>
    <input type="text" placeholder="ID" />
    <input type="password" placeholder="PW" />
    <button type="submit">제출</submit>
    <input type="reset">초기화</submit>
  </form>
</body>

*/


// Focus & Form Events

// focus  | 요소가 포커스를 얻었을 때
// blur   | 요소가 포커스를 잃었을 때
// input  | 값이 변경되었을 때 (값이 입력이 될때마다)
// change | 상태가 변경되었을 때
// submit | 제출 버튼을 선택했을 때
// reset  | 리셋 버튼을 선택했을 때

const formEl1 = document.querySelector('from')
const inputEls1 = document.querySelectorAll('input')

inputEls1.forEach(el => {
  el.addEventListener('focus', () => {
    formEl1.classList.add('active')
  })
  el.addEventListener('blur', () => {
    formEl1.classList.remove('active')
  })
  el.addEventListener('input', () => {  
    console.log(event.target.value)
  })
})

formEl1.addEventListener('submit', event => {
  event.preventDefault()  // submit 버튼을 누르면 페이지를 새로고침하기 때문에 새로 고침을 방지한다.
  const data = {
    id: event.target[0].value,
    pw: event.target[1].value,
  }
  console.log('제출!', data)
})
formEl1.addEventListener('rest', event => {
  console.log('리셋!')
})
