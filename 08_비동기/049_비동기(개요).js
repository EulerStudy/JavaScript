// 동기(Synchronous)와 비동기(Asynchronous)
// 동기: 순차적으로 코드 실행 O
// 비동기: 순차적으로 코드 실행 X

console.log(1)    // 1
console.log(2)    // 2
console.log(3)    // 3

console.log(1)    // 1
setTimeout(() => {
  console.log(2)
}, 1000)
console.log(3)    // 3
                  // 2
//

const btnEl = document.querySelector('h1')
btnEl.addEventListener('click', () => {
  console.log('Clicked!')
})
console.log('Hello World')

//
// 요청(request), 응답(response)
fetch('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
  .then(res => res.json())
  .then(res => console.log(res))  // {Serach: Array(10_, totalResults: '337')}

console.log(1)
console.log(2)
console.log(3)

//

fetch('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
  .then(res => res.json())
  .then(res => {
    console.log(res)
    console.log(1)
    console.log(2)
    console.log(3)
  })  // {Serach: Array(10_, totalResults: '337')}

