// ^ab      | 줄(Line) 시작에 있는 ab와 일치
// ab$      | 줄(Line) 끝에 있는 ab와 일치
// .        | 임의의 한 문자와 일치
// a|b      | a 또는 b와 일치
// ab?      | b가 없거나 b와 일치

// {3}      | 3개 연속 일치
// {3,}     | 3개 이상 연속 일치
// {3,5}    | 3개 이상 5개 이하(3~5개) 연속 일치
// +        | 1회 이상 연속 일치, `{1,}`

// [ab]     | a 또는 ㅠ
// [a-z]    | a부터 z 사이의 문자 구간에 일치(영어 소문자)
// [A-Z]    | A부터 Z 사이의 문자 구간에 일치(영어 대문자)
// [0-9]    | 0부터 9사이의 문자 구간에 일치(숫자)
// [가-힣]  | 가부터 힣 사이의 문자 구간에 일치(한글)

// \w       | 63개 문자(Word, 대소영문52개 + 숫자10개 + _)에 일치
// \b       | 63개 문자에 일치하니 않은 문자 경계(Boundary)
// \d       | 숫자(Digit)에 일치
// \s       | 공백(Space, Tab 등)에 일치

// (?:)     | 그룹 지정
// (?=)     | 앞쪽 일치(Lookahead)
// (?<=)    | 뒤쪽 일치(Lookbehind)

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

console.log(str.match(/^h.../gm))   // ['http', 'hell', 'http']
console.log(str.match(/^h.../gim))  // ['Hell', 'http', 'hell', 'http']

console.log(str.match(/\.com/g))    // ['.com', '.com', '.com']
console.log(str.match(/\.com$/g))   // null
console.log(str.match(/\.com$/gm))  // ['.com', '.com']
console.log(str.match(/...\.com$/gm))  // ['ail.com', 'ver.com']

console.log(str.match(/fox|dog/g))  // ['fox', 'dog']
console.log(str.match(/fox|dog|\.com/g))  // ['.com', '.com', 'fox', 'dog', '.com']

console.log(str.match(/http/g))     // ['http', 'http']
console.log(str.match(/https/g))     // ['https']
console.log(str.match(/https?/g))     // ['https', 'http']

console.log(str.match(/\d/g))     // ['0', '1', ... , '4']
console.log(str.match(/\d{3}/g))  // ['010', '123', '567', '703', '123']
console.log(str.match(/e{3}/g))   // ['eee']
console.log(str.match(/d{3}/g))   // ['ddd']
console.log(str.match(/c{3}/g))   // ['ccc']
console.log(str.match(/b{3}/g))   // null
console.log(str.match(/\d{3,9}/g))  // ['010', '1234', '5678', '7035', '1234']
console.log(str.match(/\d{3,}/g))   // ['010', '1234', '5678', '7035', '1234']
console.log(str.match(/\d{1,}/g))   // ['010', '1234', '5678', '7035', '60', '1234']
console.log(str.match(/\d+/g))   // ['010', '1234', '5678', '7035', '60', '1234']

console.log(str.match(/[ab]/g))   // (11) ['a', 'b', 'a', 'a', 'b', 'a', 'a', 'a', 'a', 'b', 'b']
console.log(str.match(/[foxdog]/g))   // (27) ['o', 'g', 'o', 'o', ... ]
console.log(str.match(/[a-z]/g))      // (133) ['t', 'h', 'e', 's', ... ]

// 단어 단위로
console.log(str.match(/[a-z]{1,}/g))  // (29) ['thesecon', 'gmail', ...]
console.log(str.match(/[a-z]+/g))  // (29) ['thesecon', 'gmail', ...]
console.log(str.match(/[A-Z]+/g))  // (2) ['H', 'T']
console.log(str.match(/[a-zA-Z]+/g))  // (29) ['thesecon', 'gmail', ...]
console.log(str.match(/[a-zA-Z가-힣]+/g))  // (33) ['thesecon', 'gmail', ...]
console.log(str.match(/[가-힣]+/g))   // (4) ['동해물과', '백두산이', '마르고', '닳도록']
console.log(str.match(/[가-힣]{3}/g))   // (4) ['동해물', '백두산', '마르고', '닳도록']
console.log(str.match(/[가-힣0-9]{3}/g))   // (9) ['010', '123', '567', ...]

console.log(str.match(/\w/g))     // (156) ['0', '1', '0', ...])
console.log(str.match(/\w+/g))    // (32) ['010', '1234', '5678', ...])

console.log(str.match(/[0-9]+/g)) // (6) ['010', '1234', '5678', '7035', '60', '1234']
console.log(str.match(/\b[0-9]+\b/g)) // (4) ['010', '1234', '5678', '1234']
console.log(str.match(/\b\d+\b/g)) // (4) ['010', '1234', '5678', '1234']

console.log(str.match(/\s/g)) // (23) ['\n', '\n', '\n', ' ', ...]

console.log(str.match(/https?:\/\/(?:\w+\.?)+\/?/g)) // (2) ['https://www.omdbapi.com/', 'http://localhost']

console.log(str.match(/.+(?=과)/g))   // ['동해물']
console.log(str.match(/(?<=과).+/g))   // [' 백두산이 마르고 닳도록']

// 전화번호 추출
console.log(str.match(/\d{3}-\d{4}-\d{4}/g))  // ['010-1234-5678']
// 이메일 추출
console.log(str.match(/\w+@\w+\.\w+/g))   // ['thesecon@gmail.com', 'hello@naver.com']

