// DOM(Document Object Model)
// DOM이란 HTML 문서를 객체로 표현한 것으로
// JS에서 HTML을 제어할 수 있게 해준다.

const element = document.querySelector('h1')
console.log(element.textContent)

// Node vs Element
// - 노드(Node): HTML 요소, 텍스트, 주석등 모든 것을 의미
// - 요소(Element): HTML 요소를 의미

/*
<div class="parent">
  <!-- 주석 -->
  <div class="child">1</div>
  텍스트1
  <div class="child">2</div>
  텍스트2
</div>
*/

const parent = document.querySelector('.parent')

// 부모 요소의 모든 자식 노드 확인!
console.log(parent.childNodes)    // NodeList(7) [text, comment, text, div.child, text, div.child, text]

// 부모 요소의 모든 자식 노드 확인!
console.log(parent.children)   // HTMLCollection(2) [div.child, div.child]

console.log(parent)   // <div class="parent">...</div>
console.dir(parent)   // div.parent  객체 데이터 처럼 출력해준다.

///

class N {}
class E extends N {}

console.dir(E)      // class E
console.dir(N)      // clsss N
// __proto__  상위 요소 확인
console.dir(E.__proto__)  // class N

console.dir(Element)    // f Element()
console.dir(Node)       // f Node()
console.dir(Element.__proto__)    // f Node()