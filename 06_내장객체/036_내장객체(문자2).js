// .replace()
// 대상 문자에서 패터(문자,정규식)과 일치하는 부분을 교체한 새로운 문자를 반환

const str1 = 'Hello, Hello?!'
console.log(str1.replace('Hello', 'Hi'))    // Hi, Hello?!
console.log(str1.replace(/Hello/g, 'Hi'))   // Hi, Hi?!
console.log(str1)                           // Hello, Hello?!

// .slice()
// 대상 문자의 일부를 추출해 새로운 문자를 반환
// 두 번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 문자의 끝까지 추출

const str2 = 'Hello world!'
//            012345678901
//           -210987654321
console.log(str2.slice(0, 5))     // Hello
console.log(str2.slice(6, -1))    // world
console.log(str2.slice(6))        // world!
console.log(str2)                 // Hello world!

// .split()
// 대상 문자를 주어진 문자로 구분자로 나눠 배열로 반환
const str3 = 'Apple, Banana, Cherry'
console.log(str3.split(', '))   // ['Apple', 'Banana', 'Cherry']
console.log(str3.split(''))   // ['A', 'p', 'p', 'l', 'e', ',', ' ', 'B', 'a', ...]
console.log(str3.split('').reverse()) // ['y', 'r', 'r', 'e', 'h', 'C', ' ', ',', 'a', ...]
console.log(str3.split('').reverse().join(''))    // trrehC ,ananaB ,elppA

// .toLowerCase()
// 대상 문자를 영어 소문자로 변환해 새로운 문자로 반환

const str4 = 'Apple, Banana, Cherry'
console.log(str4.toLowerCase())   // apple, banana, cherry
console.log(str4)                 // Apple, Banana, Cherry

// .toUpperCase()
// 대상 문자를 영어 대문자로 변환해 새로운 문자로 반환
console.log(str4.toUpperCase())   // APPLE, BANANA, CHERRY
console.log(str4)                 // Apple, Banana, Cherry

// .trim()
// 대상 문자의 앞뒤 공백 문자(space, tab)을 제거한 새로운 문자를 반환
const str5 = '   HEROPY!  '
console.log(str5.trim())  // 'HEROPY!'
console.log(str5)         // '   HEROPY!  '

