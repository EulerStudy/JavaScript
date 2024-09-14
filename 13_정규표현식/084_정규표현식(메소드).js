// 정규식.test(문자열) - 일치여부반환
// 문자열.match(정규식) - 일치하는 문자의 배열 반환
// 문자열.replace(정규식, 대체문자) - 일치하는 문자를 대체

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

const regexp = /fox/gi

console.log(regexp.test(str))     // true
console.log(str.match(regexp))    // ['fox']
console.log(str.replace(regexp, 'cat')) // 010-1234-5678...eeeee

console.log(/fox/gi.test(str))     // true
console.log(str.match(/fox/gi))    // ['fox']
console.log(str.replace(/fox/gi, 'cat')) // 010-1234-5678...eeeee