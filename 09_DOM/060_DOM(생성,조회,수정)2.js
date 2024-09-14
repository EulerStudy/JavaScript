// E.dataset
// HTML의 요소에다가 Javascript의 데이터를 저장
// 요소의 각 `data-` 속성 값을 얻거나 지정

const el1 = document.querySelector('.child')
const str1 = 'Hello world!'
const obj1 = { a: 1, b: 2 }

el1.dataset.helloWorld = str1
el1.dataset.object = JSON.stringify(obj1)

console.log(el1.dataset.helloWorld)   // Hello world/1
console.log(el1.dataset.object)       // {"a":1,"b":2}
console.log(JSON.parse(el1.dataset.object)) // {a: 1, b: 2}

// E.tagName
// 요소의 태그 이름을 반환

const parentEl1 = document.querySelector('.parent')
const childEl1 = document.querySelector('.child')
const el1 = document.createElement('span')
console.log(parentEl1.tagName)    // DIV
console.log(childEl1.tagName)     // DIV
console.log(el1.tagName)          // SPAN
console.log(document.body.tagName)  //BODY

// E.id
// 요소의 `id` 속성 값을 얻거나 지정

const el2 = document.querySelector('.child')
console.log(el2.id)
el2.id = 'child1'
console.log(el2.id)   // child2
console.log(el2)    // <div class="child" id="child1">1</div>

// E.className
// 요소의 `className`의 속성 값을 얻거나 지정

const el3 = document.querySelector('.child')
console.log(el3.className)  // child

el3.className += ' child1 active'
console.log(el3.className)  // child child1 active
console.log(el3)  // <div class="child child1 active">1</div>

// E.classList
// 요소의 `class` 속성 값을 제어
// - `.add()`: 새로운 값을 추가
// - `.remove()`: 기존 값을 제거
// - `.toggle()`: 값을 토글
// - `.contains(()`: 값을 확인

const el4 = document.querySelector('.child')

el4.classList.add('active')
console.log(el4.classList.contains('active'))   // true

el4.classList.remove('active')
console.log(el4.classList.contains('active'))   // false

el4.addEventListener('click', () => {
  el4.classList.toggle('active')
  console.log(el4.classList.contains('active'))
})

// E.style
// 요소의 `style` 속성(인라인 스타일)의 CSS 속성 값을 얻거나 지정

const el5 = document.querySelector('.child')
// 개별 지정!
el5.style.width = '100px'
el5.style.fontSize = '20px'
el5.style.backgroundColor = 'green'
el5.style.position = 'absolute'

// 한 번에 지정!
Object.assign(el5.style, {
  width: '100px',
  fontSize: '20px',
  backgroundColor: 'green',
  position: 'absolute',
})

console.log(el5.style)    // CSSStyleDeclaration {accentColor:...}
console.log(el5.style.width)
console.log(el5.style.fontSize)
console.log(el5.style.backgroundColor)
console.log(el5.style.position)

// window.getComputedStyle()
// 요소에 적용된 스타일 객체를 반환

const el6 = document.querySelector('.child')
const styles = window.getComputedStyle(el6)
console.log(styles.width)
console.log(styles.fontSize)
console.log(styles.backgroundColor)
console.log(styles.position)
console.log(styles)   // CSSStyleDeclaration

// E.getAttrubute() / E.setAttribute()
// 요소에서 특정 속성 값을 얻거나 지정
// 속성 : HTML에서는 Attribute, CSS나 JavaScript에서는 Property
const el7 = document.querySelector('.child')
el7.setAttribute('title', 'Hello World!')
console.log(el7.getAttribute('title'))    // Hello World!

// E.hasAttribute / E.removeAttribute
// 요소에서 특정 속성을 확인하거나 제거
const el8 = document.querySelector('.child')

console.log(el8.hasAttribute('class'))    // true
el8.removeAttribute('class')
console.log(el8.hasAttribute('class'))    // false
console.log(el8)    // <div>1</div>