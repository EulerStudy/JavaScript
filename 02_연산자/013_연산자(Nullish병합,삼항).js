// Nullish 병합(Nullish Coalescing)

// OR 연산자를 사용하는 경우
const n = 0
const num1 = n || 7
console.log(num1)   // 7

// Nullish 병합 연산자를 사용하는 경우
// null과 undefined는 건너띄고, 나머지 모든 데이터는 만나자마자 반환
const num2 = n ?? 7
console.log(num2)   // 0

console.log(null ?? 1)          // 1
console.log(undefined ?? 2)     // 2
console.log(null ?? undefined)  // undefined
console.log(null ?? 1 ?? 2)      // 1
console.log(false ?? 1 ?? 2)    // false
console.log(0 ?? 1 ?? 2)        // 0

// 삼항(Ternary)
// 조건 ? 참 : 거짓
const a = 1;
console.log(a < 2 ? '참' : '거짓')

function getAlert(message) {
  return message 
    ? message 
    : '메시지가 존재하지 않습니다!'
}

console.log(getAlert('안녕하세요'))
console.log(getAlert(''))