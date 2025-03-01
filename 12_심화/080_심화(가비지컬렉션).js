// 가비지 컬렉션(GC, Garbage Collection, 쓰레기 수집)
// 자바스크립트의 메모리 관리 방법으로 자바스크립트 엔진이 자동으로
// 데이터가 할당된 메모리에서 더 이상 사용되지 않는 데이터를 제거하는 것을 말한다
// 가비지 컬렉션은 개발자가 직접 강제 실행하거나 관리할 수 없다.

let a = { x: 1 }
let b = a

b.x = 2
console.log(a)  // { x: 2 }
console.log(b)  // { x: 2 }

///

const user = {
  name: 'Heropy',
  age: 85,
  emails: ['thesecon@gmail.com', 'heropy@abc.com'],
}

delete user.emails
console.log(user) // {name:'Heropy', age: 85}