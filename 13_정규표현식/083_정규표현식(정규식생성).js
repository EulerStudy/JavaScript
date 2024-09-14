// 정규표현식(RegExp, Regular Expression)
// - 문자 검색(Search)
// - 문자 대체(Replace)
// - 문자 추출(Extract)

// 생성자
// new RegExp('표현','옵션')
// new RegExp('[a-z]','gi')

// 리터럴
// /표현/옵션
// /[a-z]/gi

const str = `
010-1234-5678
thesecon@gmail.com
Hello world!
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
hello@naver.com
http://localhos:1234
동해불과 백두산이 마르고 닳도록
abbcccddddeeeee
`

const regexp = new RegExp('the','')
console.log(srt.match(regexp))  // ['the', index: 15, input:...]

const regexp2 = new RegExp('the','g')
console.log(srt.match(regexp2))  // ['the', 'the']

const regexp3 = new RegExp('the','gi')
console.log(srt.match(regexp2))  // ['the', 'The', 'the']

const regexp4 = /the/gi
console.log(srt.match(regexp2))  // ['the', 'The', 'the']

console.log(srt.match(/the/gi))  // ['the', 'The', 'the']
