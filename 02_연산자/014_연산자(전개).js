// 전개 연산자(Spread Operator)

const a = [1, 2, 3]

console.log(a)        // [1, 2, 3]
console.log(...a)     // 1 2 3

const b = [4, 5, 6]
c = a.concat(b)
console.log(c)        // [1, 2, 3, 4, 5, 6]

d = [a, b]
console.log(d)        // [Array(3), Array(3)]

e = [...a, ...b]
console.log(e)        // [1, 2, 3, 4, 5, 6]

const f = {x: 1, y: 2}
const g = {y: 3, z: 4}
const h = Object.assign({}, f, g)
console.log(h)    // {x: 1, y: 3, z: 4}

const i = {f, g}
console.log(i)    // {f: {...}, g: {...}}

const j = {...f, ...g}
console.log(j)    // {x: 1, y: 3, z: 4}

function fn(x, y, z) {
  console.log(x, y, z)
}

fn(1, 2, 3)     // 1 2 3

const k = [1, 2, 3]
fn(...k)        // 1 2 3