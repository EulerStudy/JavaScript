const getMovies = movieName => {
  return new Promise(resolve => {
    fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
    .then(res => res.join())
    .then(res => resolve())
  })
}

// forEach는 동기화를 할 수 없다
const titles = ['frozen', 'avengers', 'avatar']
titles.forEach(async title => {
  const movies = await getMovies(title)
  console.log(title, movies)
})

// 동기화를 하기 위해서는 for 반복문을 사용해야 한다.
const wrap = async () => {
  for(const title of titles) {
    const movies = await getMovies(title)
    console.log(title, movies)
  }
}