// 참과 거짓(Truthy & Falsy)
if (true) {
  console.log('참')
}

// Falsy
// 1) false
// 2) 0
// 3) null
// 4) undefined
// 5) NaN
// 6) ''
// 7) 0n

const fruits = ['Apple', 'Banana']
if (fruits.length) {
  console.log('아이템이 들어있음!')
}