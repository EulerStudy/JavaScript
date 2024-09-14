// g - 모든 문자 일치(Global), g가 없으면 먼저 찾은 문자와 일치
// i - 영어 대소문자를 구분 않고 일치 (Ignore case)
// m - 여러 줄 일치(Multi line), 각각의 줄을 시작과 끝으로 인식!

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
console.log(str.match(/the/))     // ['the, index: 15, input: ...]
console.log(str.match(/the/g))    // ['the', 'the']
console.log(str.match(/the/gi))   // ['the', 'The', 'the']
console.log(str.match(/\.$/gi))   // null
console.log(str.match(/\.$/gim))  // ['.']