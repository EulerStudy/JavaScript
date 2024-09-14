// Promise

const a1 = callback => {
  setTimeout(() => {
    console.log(1)
    callback()
  }, 1000)
}

const b1 = () => console.log(2)

a1(() => {
  b1()
})

//

const a2 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(1)
      resolve()
    })
  })
}

const b2 = () => console.log(2)

a2().then(() => { b2() })

//

const a3 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(1)
      resolve()
    })
  })
}

const b3 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(2)
      resolve()
    })
  })
}

const c3 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(3)
      resolve()
    })
  })
}
const d3 = () => console.log(4)

a3().then(() => { 
  b3().then(() => {
    c3().then(() => {
      d3()
    })
  }) 
})

a3().then(() => {
  return b3()
}).then(() => {
  return c3()
}).then(() => {
  d3()
})

a3()
  .then(() => b3())
  .then(() => c3())
  .then(() => { d3() })

a3()
  .then(b3)
  .then(c3)
  .then(d3)
  .then(() => console.log('done!'))

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

getMovies('frozen').then(() => { 
  console.log('겨울왕국!')
  return getMovies('avengers')
}).then(() => {
  console.log('어벤저스!')
  return getMovies('avatar')
}).then(() => {
  console.log('아바타!')
})