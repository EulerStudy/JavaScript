// 콜백(callback) 패턴

const a1 = () => console.log(1)    // 1
const b1 = () => console.log(2)    // 2

a1()
b1()

//

const a2 = () => {
  setTimeout(() => {
    console.log(1)
  }, 1000)
}
const b2 = () => console.log(2)    // 2

a2()
b2()

//

const a3 = (callback) => {
  setTimeout(() => {
    console.log(1)
    callback()
  }, 1000)
}
const b3 = () => console.log(2)    // 2

a3(() => {
  b3()
})

//

const a4 = (callback) => {
  setTimeout(() => {
    console.log(1)
    callback()
  }, 1000)
}
const b4 = (callback) => {
  setTimeout(() => {
    console.log(2)
    callback()
  }, 1000)
}
const c4 = (callback) => {
  setTimeout(() => {
    console.log(3)
    callback()
  }, 1000)
}
const d4 = () => console.log(4)

a4(() => {
  b4(() => {
    c4(() => {
      d4()
    })
  })
})

// 비동기이므로 겨울왕국, 어벤져스, 아바타가 순차적으로 실행되지 않는다.
 
const getMovies1 = (movieName, callback) => {
  fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
    .then(res => res.join())
    .then(res => {
      console.log(res)
      callback()
    })
}

getMovies1('frozen', () => {
  console.log('겨울왕국!')
})
getMovies1('avengers', () => {
  console.log('어벤저스!')
})
getMovies1('avatar', () => {
  console.log('아바타!')
})

//

const getMovies2 = (movieName, callback) => {
  fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
    .then(res => res.join())
    .then(res => {
      console.log(res)
      callback()
    })
}

getMovies2('frozen', () => {
  console.log('겨울왕국!')
  getMovies2('avengers', () => {
    console.log('어벤저스!')
    getMovies2('avatar', () => {
      console.log('아바타!')
    })    
  })
})




