// .length
// 문자의 길이(숫자)를 반환

const str1 = 'Hello world!'
//            012345678901
console.log(str1.length)   // 12

// .includes()
// 대상 문자에 주어진 문자가 포함되어 있는지(불린) 확인
console.log(str1.includes('Hello'))      // true
console.log(str1.includes('Hello', 1))   // 1번 인덱스부터 확인, false

// .indexof()
// 대상 문자에서 주어진 문자와 일치하는 첫 번째 인덱스(숫자) 반환
// 일치하는 문자가 없으면 -1을 반환
console.log(str1.indexOf('world'))   // 6
console.log(str1.indexOf('HEROPY'))  // -1

if (str1.indexOf('HEROPY') === -1) {
  console.log('HEROPY가 없습니다.')   // HEROPY가 없습니다.
}

if (!str1.includes('HEROPY')) {
  console.log('HEROPY가 없습니다.')   // HEROPY가 없습니다.
}

// .padEnd()
// 대상 문자의 길이(length)가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 끝에 붙여 새로운 문자를 반환한다.

const str2 = '1234567'
console.log(str2.padEnd(10, '0'))   // 1234567000
console.log(str2)                   // 1234567

// .padStart()
// 대상 문자의 길이(length)가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 앞에 붙여 새로운 문자를 반환

console.log(str2.padStart(10, '0'))  // 0001234567
console.log(str2)                    // 1234567


