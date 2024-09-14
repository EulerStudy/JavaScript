// Cookie(쿠기)
// 도메인 단위로 저장
// 표준안 기준, 사이트당 최대 20개 및 4KB로 제한
// 영구 저장 불가능
// domain: 유효 도메인 설정
// path: 유효 경로 설정
// expires: 유효 날짜(UTC Date) 설정, UTC 표준시 설정
// max-age: 만료 타이머(s) 설정
// 만료를 따로 설정하지 않으면 세션이고 이것은 브라우저가 종료되면 만료됨

document.cookie = 'a=1; domain=localhost; path=/; max-age=3'   // 3초뒤 만료
document.cookie = `b=2; max-age=${60 * 60 * 24 * 3};`          // 3일뒤 만료
document.cookie = `c=3; expires=${new Date(2022, 0, 16).toUTCString()}`      // 2022년 1월 16일 만료
document.cookie = 'a=3'   // 덮어쓰기
console.log(document.cookie)    // a=3; b=2; c=3

function getCookie(name) {
  const cookie = document.cookie
    .split('; ')    // ['c=3', 'b=2', 'a=3']
    .find(cookie => cookie.split('=')[0] === name)
  return cookie ? cookie.split('=')[1] : null
}
console.log(getCookie('a'))   // 3

// Storage(스토리지)
// 도메인 단위로 저장
// 5MB 제한
// 세션 혹은 영구 저장 가능
// sessionStorage: 브라우저 세션이 유지되는 동안에만 데이터 저장
// localStroage: 따로 제거하지 않으면 영구적으로 데이터 저장, 문자로 저장된다.
// .getItem(): 데이터 조회
// .setItem(): 데이터 추가
// .removeItem(): 데이터 제거
// .clear(): 스토리지 초기화

localStorage.setItem('a', JSON.stringify('Hello world'))  // "Hello world", JSON은 큰따옴표만 쓸 수 있다.
localStorage.setItem('b', JSON.stringify({x: 1, y: 2}))   // {"x":1, "y":2}
localStorage.setItem('c', JSON.stringify(123))

console.log(JSON.parse(localStorage.getItem('a')))    // Hello world
console.log(JSON.parse(localStorage.getItem('b')))    // {x: 1, y: 2}
console.log(JSON.parse(localStorage.getItem('c')))    // 123

localStorage.removeItem('a')
localStorage.clear()
