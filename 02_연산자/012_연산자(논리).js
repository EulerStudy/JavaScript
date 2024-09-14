// 논리(Logical)

const a = true
const b = false

console.log(a && b)   // false
console.log(a || b)   // true

// 가장 먼저 만나는 거짓 데이터 반환
console.log(true && false)  // false
console.log (1 && 0)        // 0
console.log (1 && 2 && 0)   // 0
console.log(1 && 0 && 2)    // 0
console.log(0 && 1 && 2)    // 0
console.log('A' && 'B' && '')   // ''
console.log('A' && 'B' && 'C')  // C (가장 마지막 참 데이터 반환)

// 가장 먼저 만나는 참 데이터 반환
console.log(false || true)      // true
console.log(0 || 1)             // 1
console.log(false || 0 || {})   // {}
console.log(false || [] || null)    // []
console.log(function() {} || undefined || '')   // f () {}
console.log(false || 0 || Nan)  // NaN






