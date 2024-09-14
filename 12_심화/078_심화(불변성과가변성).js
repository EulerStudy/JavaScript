// 불변성 & 가변성
// 불변성(Immutablility)은 생성된 데이터가 메모리에서 변경되지 않고,
// 가변성(Mutability)은 생성된 데이터가 메모리에서 변경될 수 있음을 의미한다.
// 자바스크립트 원시형은 불변성을, 참조형은 가변성을 가지고 있다.
// 참조형은 객체,배열,함수 이고 나머지는 모두 원시형이다.
let a = 1
let b = a
b = 2
console.log(b)  // 2
console.log(a)  // 1

/// 

let c = { x: 1}
let d = c

d.x = 2
console.log(c)  // { x: 2 }
console.log(d)  // { x: 2 }

c.x = 7
console.log(c)  // { x: 7 }
console.log(d)  // { x: 7 }

console.log(c === d)   // true, 같은 메모리 주소를 바라보는가

///

let e = { x: 1 }
let f = { x: 1 }

f.x = 2
console.log(e)  // { x: 1 }
console.log(f)  // { x: 2 }

console.log(e === f) // false, 참조형은 데이터가 같더라도 다른 메모리 공간에 할당된다.

///

let g = [1, 2, 3]
let h = g
h[0] = 4
console.log(g)  // [4, 2, 3]
console.log(h)  // [4, 2, 3]



