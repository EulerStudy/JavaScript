/*
<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
</div>
*/

// document.createElement()
// 메모리에만 존재하는 새로운 HTML 요소를 생성해 반환

const divEl = document.createElement('div')
console.log(divEl)    // <div></div>
const inputEl = document.createElement('input')
console.log(inputEl)  // <input>

// E.prepend() / E.append()
// 노드를 요소의 첫 번째 혹은 마지막 자식으로 삽입
// 추가하고 싶은 요소를 한 개 이상 작성할 수 있다.

const parentEl1 = document.querySelector('.parent')
const el1 = document.createElement('div')
el1.textContent = 'Hello~'

parentEl1.prepend(new Comment(' 주석 '))
parentEl1.append(el, 'Text!')    // 요소를 2개 이상 삽입이 가능하다.

// E.remove()
// 요소를 제거

const el = document.querySelector('.child')
el.remove()

// E.insertAdjacentElement()
// '대상 요소'의 지정한 위치에 '새로운 요소'를 삽입
// 대상_요소.insertAdjacentElement(위치, 새로운_요소)

/* html
<!-- 'beforebegin' -->
<div class="target">
  <!-- 'afterbegin' -->
  Content!
  <!-- 'beforeend' -->
</div>
<!-- 'afterend' -->
*/

const childEl1 = document.querySelector('.child')
const newEl1 = document.createElement('span')
newEl1.textContent = 'Hello~'
childEl1.insertAdjacentElement('beforebegin', newEl1)

// N.insertBefor()
// '보모 노드'의 자식인 '참조 노드'의 이전 형제로 '노드'를 삽입
// 부모_노드.insertBefore(노드, 참조_노드)

const parentEl2 = document.querySelector('.parent')
const childEl2 = document.querySelector('.child')
const newEl2 = document.createElement('span')
newEl2.textContent = 'Hello~'

parentEl2.insertBefore(newEl2, childEl2)

// N.contains()
// '주어진 노드'가 '노드'의 자신을 포함한 후손인지 확인
// 노드.contains(주어진_노드)

const parentEl3 = document.querySelector('.parent')
const childEl3 = document.querySelector('.child')
console.log(parentEl3.contains(childEl3))   // true
console.log(document.body.contains(parentEl3))      // true
console.log(document.body.contains(childEl3) )      // true
console.log(document.body.contains(document.body))  // true
console.log(parentEl3.contains(parentEl3))      // true
console.log(parentEl3.contains(document.body))  // false
console.log(childEl3.contains(document.body))   // false

// N.textContent
// 노드의 모든 텍스트를 얻거나 변경

const el6 = document.querySelector('.child')
console.log(el6.textContent)    // 1
el6.textContent = '7'
console.log(el6.textContent)    // 7

// E.innerHTML
// 요소의 모든 HTML 내용을 하나의 문자로 얻거나 새로운 HTML로 지정

const el8 = document.querySelector('.parent')
console.log(el8.innerHTML) // <div class="child">1</div> <div class="child">2</div>
el8.innerHTML = '<span style="color: red;">Hello~</span>'

// 확정 프로그램 Comment tagged templates
// 백틱 기호 앞에다가 내가 사용언 언어를 주석기호로 달아주면 코드 하이라이팅이 된다.
el8.innerHTML = /* html */ `
<div style="border: 4px solid;">
  <span style="color: red;">Hello~</span>
  <span style="color: red;">Hello~</span>
</div>`