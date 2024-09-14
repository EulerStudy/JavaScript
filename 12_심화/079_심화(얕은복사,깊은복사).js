// 얕은 복사 & 깊은 복사
// 참조형은 가변성으로 인해, 데이터를 복사할 때 주의가 필요하다
// 얕은 복사(Shallow Copy) - 참조형의 1차원 데이터만 복사
// 깊은 복사(Deep Copy) - 참조형의 모든 차원 데이터를 복사

const a = { x: 1 }
const b = Object.assign({}, a)

b.x = 2

console.log(a)  // { x: 1 }
console.log(b)  // { x: 2 }

///

const c = { x: 1 }
const d = { ...c }
d.x = 2

console.log(c)  // { x: 1 }
console.log(d)  // { x: 2 }

///

const e = { x: {y: 1}}
const f = { ...e }
f.x.y = 2
console.log(e)  // { x: {y: 2} }
console.log(f)  // { x: {y: 2} }

/*
>> npm i lodash
>> npm run dev
*/

import cloneDeep from 'lodash/cloneDeep'

const g = { x: {y: 1}}
const h = cloneDeep(g)
h.x.y = 2
console.log(g)  // { x: {y: 1} }
console.log(h)  // { x: {y: 2} }

/// 
const i = [1, 2, 3]
const j = i.concat([])
j[0] = 4
console.log(i)  // [1, 2, 3]
console.log(j)  // [4, 2, 3]

/// 
const k = [1, 2, 3]
const l = [...k]
l[0] = 4
console.log(k)  // [1, 2, 3]
console.log(l)  // [4, 2, 3]

/// 
const m = [[1, 2], [3]]
const n = [...m]
n[0][0] = 4
console.log(m)  // [[4, 2], [3]]
console.log(n)  // [[4, 2], [3]]

/// 
const o = [[1, 2], [3]]
const p = cloneDeep(o)
p[0][0] = 4
console.log(o)  // [[1, 2], [3]]
console.log(p)  // [[4, 2], [3]]
