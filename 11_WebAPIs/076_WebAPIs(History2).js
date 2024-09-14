/*
<style>
  body {
    maring: 0;
  }
  nav {
    background-color: white;
    padding: 10px;
    border: 4px;
    position: fixed;
    bottom: 0;
    right: 0;
  }
  nav input {
    width: 50px;
  }
  section {
    height: 100vh;
    border: 10px solid;
    box-sizing: border-box;
  }
  section.page1 { color: red; }
  section.page2 { color: orange; }
  section.page3 { color: green; }
</style>
<body>
  <nav>
    <a href="#/page1">p1</a> /
    <a href="#/page3">p2</a> /
    <a href="#/page3">p3</a>
    <input type="text" />
  </nav>
  <div id="app">
    <section id="/page1" class="page1">
      <h1>Page 1</h1>
    </section>
    <section id="/page2" class="page2">
      <h1>Page 2</h1>
    </section>
    <section id="/page3" class="page3">
      <h1>Page 3</h1>
    </section>
  </div>
</body>
*/

const page1 = /* html */ `
  <section class='page1'>
    <h1>Page 1</h1>
  </section>
`
const page2 = /* html */ `
  <section class='page2'>
    <h1>Page 2</h1>
  </section>
`
const page3 = /* html */ `
  <section class='page3'>
    <h1>Page 3</h1>
  </section>
`
const pageNotFound = /* html */ `
  <section>
    <h1>404 Page Not Found!</h1>
  </section>
`
const pages = [
  { path: '#/page1', templage: page1 },
  { path: '#/page2', templage: page2 },
  { path: '#/page3', templage: page3 }
]
const appEl = document.querySelector('#app')
const render = () => {
  console.log(history)
  const page = pages.find(page => page.path === location.hash)
  appEl.innerHTML = page
    ? page.template
    : pageNotFound
}

// popstate: 사용자가 페이지에서 히스토리를 남기는 동작을 할 때마다 발생하는 이벤트,
// 즉, 페이지가 바뀔 때마다 이벤트 발생
window.addEventListener('popstate', render)
// 페이지가 새로 고침을 할 때마다 render() 함수가 최초 한 번 발생해야 함
render()

const pagePush = num => {
  history.pushState(`전달할 데이터 - {num}`, '', `#/page${num}`)
  render()
}

const inputEl = document.querySelector('nav input')
inputEl.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    pagePush(event.target.value)
  }
})