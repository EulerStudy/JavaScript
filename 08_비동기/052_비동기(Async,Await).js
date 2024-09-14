// Async / Await

const a1 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(1)
      resolve()
    }, 1000)
  })
}
const b1 = () => console.log(2)

a1().then(() => b1())

//

const a2 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(1)
      resolve()
    }, 1000)
  })
}
const b2 = () => console.log(2)

const wrap1 = async () => {
  await a2()
  b2()
}
wrap()

//

const getMovies = movieName => {
  return new Promise(resolve => {
    fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
    .then(res => res.join())
    .then(res => {
      console.log(res)
      resolve()
    })
  })
}
// await 키워드는 Promise 인스턴스가 반환되는 함수에서만 사용될 수 있다.
const wrap2 = async () => {
  await getMovies('frozen')
  console.log('겨울왕국!')
  await getMovies('avengers')
  console.log('어벤져스!')
  await getMovies('avatar')
  console.log('아바타!')
}
wrap2()