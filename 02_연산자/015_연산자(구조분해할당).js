// 구조 분해 할당(Destructuring assignment)

const arr = [1, 2, 3]
const a = arr[0]
const b = arr[1]
const c = arr[2]

console.log(a, b, c)    // 1 2 3

const [d, e, f] = arr
console.log(d, e, f)    // 1 2 3

let g = 0
let h = 0
let i = 0
;[g, h, i] = arr
console.log(g, h, i)  // 1 2 3

;[, h, i]= arr
console.log(h, i)     // 2 3

;[,, i]= arr
console.log(i)        // 3

const [j, ...rest] = arr
console.log(j, rest)  // 1, [2, 3]

const obj = {
  k: 1,
  l: 2,
  m: 3,
  n: 4,
  o: 5,
}

const p = obj.k
console.log(p)    //  1

const {k, l} = obj
console.log(k, l)    // 1, 2

const {m} = obj
console.log(m)       //  3

const {q} = obj
console.log(q)       // undefined

const {r = 4} = obj     // 디폴트값
console.log(r)          // 4

const {s = 4, k: t, u: ten = 10 } = obj   // k 속성의 값을 변수 t에 저장, 속성 y를 변수 ten에 저장
console.log(t)     // 1
console.log(ten)   // 10

const {n, ...v} = obj
console.log(n, y)  // 4 {k: 1, l: 2, m: 3, o: 5}