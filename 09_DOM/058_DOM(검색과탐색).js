/*
<div class="parent">
  <!-- 주석 -->
  <div class="child">1</div>
  텍스트1
  <div id="child2" class="child">2</div>
  텍스트2
</div>
*/

//document.getElementById()
// HTML `id` 속성(Attributes) 값으로 검색한 요소를 반환
// 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환
// 검색 결과가 없으며, `null`를 반환

const el1 = document.getElementById('child2')
console.log(el1)   // <div id="child2" class="child">2</div>

// document.querySelector()
// 'CSS 선택자'로 검색한 요소를 하나 반환
// 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환
// 검색 결과가 없으면, `null`을 반환

const el2 = document.querySelector('.child:first-child')
console.log(el2)    // <div class="child">1</div>

// document.querySelectorAll()
// 'CSS 선택자'로 검색한 모든 요소를 `NodeList`로 반환
// `NodeList` 객체는 `.forEach()`를 사용할 수 있다.

const nodeList = document.querySelectorAll('.child')
console.log(nodeList) // NodeList(2 [div.child, div#child2.child])
nodeList.forEach(el => console.log(el.textContent))   // 1 2

// 위에는 유사배열(Array Like)이기 때문에 배열 메소드를 사용할 수 없다.
// 진짜 배열로 바꾸기 위해서는 Array.from(유사배열)

console.log(Array.from(nodeList).reverse())   // [div#child2.child, div.child]

// N.parentElement
// 노드의 부모 요소를 반환

const el3 = document.querySelector('.child')
console.log(el3.parentElement)  // <div class="parent">...</div>

// E.closest()
// 자신을 포함한 조상 요소 중 'CSS 선택자'와 일치하는
// 가장 가까운 요소를 반환
// 요소를 찾지 못하면, `null`을 반환

const el4 = document.querySelector('.child')
console.log(el4.closest('div'))     // <div class="child">1</div>
console.log(el4.closest('body'))    // <body cz-shortcut-listen="true">...</body>
console.log(el4.closest('.hello'))  // null

// N.previoustSibling / N.nextSibling
// 노드의 이전 형제 혹은 다음 형제 노드를 반환

const el5 = document.querySelector('.child')
console.log(el5.previousSibling)  // #text
console.log(el5.nextSibling)      // "텍스트1"
console.log(el5.previousSibling.parentElement)  // <div class="parent">...</div>

// E.previousElementSibling / E.nextElementSibling
// 요소의 이전 형제 혹은 다음 형제 요소를 반환

const el6 = document.querySelector('.child')
console.log(el6.previousElementSibling)   // null
console.log(el6.nextElementSibling)       // <div id="child2" class="child">2</div>

// E.children
// 요소의 모든 자식 요소를 반환
const el7 = document.querySelector('.parent')
console.log(el7.children)   // HTMLCollection [div.child, div#child2.child]
console.log(Array.from(el7.children))   // [div.child, div#child2.child]

// E.firstElementChild / E.lastElementChild
// 요소의 첫 번째 자식 혹은 마지막 자식 요소를 반환
const el8 = document.querySelector('.parent')
console.log(el8.firstElementChild)     // <div class="child">1</div>
console.log(el8.lastElementChild)  // <div id="child2" class="child">2</div>