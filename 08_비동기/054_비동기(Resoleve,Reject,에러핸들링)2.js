const getMovies = movieName => {
  return new Promise((resolve,reject) => {
    fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
    .then(res => res.join())
    .then(json => {
      if (json.Response === 'False') {
        reject(json.error)
      }
      resolve(json)
    })
    .catch(error => {
      reject(error)
    })
  })
}

// .then()
let loading = false
getMovies('avengers')
  .then(movies => console.log('영화 목록:', movies))
  .catch(error => console.log('에러 발생:', error))
  .finally(() => loading = false)

// async / await
const wrap = async () => {
  try {
    const movies = await getMovies('aventers')
    console.log('영화 목록:', movies)
  } catch(error) {
    console.log('에러 발생:', error)
  } finally {
    loading = false
  }
}
wrap()