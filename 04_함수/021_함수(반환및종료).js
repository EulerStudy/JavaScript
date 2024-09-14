// 반환 및 종료

function hello() {
  return 'Hello~'
  console.log('Wow~')
}

console.log(hello())    // Hello~

function plus1(num) {
  return num + 1
}

function plus2(num) {
  if(typeof num !== 'number') {
    console.log('숫자를 입력해주세요')
    return 0
  }
  return num + 1
}


console.log(plus1(2))    // 3
console.log(plus1())     // 매개변수 num에 undefined가 넘어가서 NaN이 반환

console,log(plus2())     // 0