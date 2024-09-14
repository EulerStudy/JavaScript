// 콜백(Callback)
// 함수가 실행될 때 인수로 함수가 들어가는 것
const a = callback => {
  console.log('A')    // A
  callback()          // B
}
const b = () => {
  console.log('B')
}

a(b)

const sum = (a, b, c) => {
  setTimeout(() => {
    c(a + b)
  }, 1000)
}

sum(1, 2, value => {
  console.log(value)    // 3
})

const loadImage = (url, cb) => {
  const imgEl = document.createElement('img')
  imgEl.src = url 
  imgEl.addEventListener('load', () => {
    setTimeout(() => {
      cb(imgEl)
    }, 1000)
  })
}

const containerEl = document.querySelector('.container')
loadImage('https://www.gstatic.com/webp/gallery/4.jpg', imgEl => {
  containerEl.innerHTML = ''
  containerEl.append(imgEl)
})