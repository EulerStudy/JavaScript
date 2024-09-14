const date1 = new Date()
console.log(date1)
// 타임스탬프 - 'Wed Sep 28 2022 10:45:41 GMT+0900 (한국표준시)

const d1 = new Date(2022, 11, 16, 12, 57, 30)   // 년,월,일,시,분,초 - 월은 zero base numbering
console.log(d1)   // Fri Dec 16 2022 12:57:30 GMT+0900 (한국표준시)

const d2 = new Date('Fri Dec 16 2022 12:57:30 GMT+0900 (한국표준시)')
console.log(d2)   // Fri Dec 16 2022 12:57:30 GMT+0900 (한국표준시)
console.log(d2.getFullYear())   // 2022

// .getFullYear()와 setFullYear()
// 날짜 인스턴스의 '연도'를 변환하거나 지정한다

const date2 = new Date()
console.log(date2.getFullYear())  // 2022

date2.setFullYear(2023)
console.log(date2.getFullYear())   // 2023
console.log(date2)   // Thu Sep 28 2023 15:20:23 GMT+0900 (한국 표준시)

// .getMonth()와 .setMonth()
// 날짜 인스턴스의 '월'을 반환하거나 지정
// 0부터 시작(Zero-based numbering)
const date3 = new Date()
console.log(date3.getMonth())   // 8
console.log(date3)      // Wed Sep 28 2022 15:27:35 GMT+0900 (한국 표준시)

date3.setMonth(0)
console.log(date3.getMonth())   // 0
console.log(date3)      // Fri Jan 28 2022 15:27:35 GMT+0900 (한국 표준시)

// .getDate()와 .setDate()
// 날짜 인스턴스의 '일'을 반환하거나 지정
const date4 = new Date()
console.log(date4.getDate())    // 28
console.log(date4)              // Wed Sep 28 2022 15:35:56 GMT+0900 (한국표준시)

date4.setDate(11)
console.log(date4.getDate())    // 11
console.log(date4)              // Sun Sep 11 2022 15:35:56 GMT+0900 (한국표준시)

// .getHours()와 .setHours()
// 날짜 인스턴스의 '시간'을 반환하거나 지정
const date5 = new Date()
console.log(date5.getHours())   // 15
console.log(date5)              // Wed Sep 28 2022 15:44:16 GMT+0900 (한국표준시)

date5.setHours(7)
console.log(date5.getHours())   // 7
console.log(date5)              // Wed Sep 28 2022 07:44:16 GMT+0900 (한국표준시)

// .getMinutes()와 .setMinutes()
// 날짜 인스턴스의 '시간'을 반환하거나 지정
const date6 = new Date()
console.log(date6.getMinutes())   // 48
console.log(date6)                // Wed Sep 28 2022 15:48:35 GMT+0900 (한국표준시)

date6.setMinutes(2)
console.log(date6.getMinutes())   // 2
console.log(date6)                // Wed Sep 28 2022 15:02:35 GMT+0900 (한국표준시)

// .getSeconds()와 .setSeconds()
// 날짜 인스턴스의 '초'를 반환하거나 지정
const date7 = new Date()
console.log(date7.getSeconds())   // 38
console.log(date7)                // Wed Sep 28 2022 15:51:38 GMT+0900 (한국표준시)

date7.setSeconds(57)
console.log(date7.getSeconds())   // 57
console.log(date7)                // Wed Sep 28 2022 15:51:57 GMT+0900 (한국표준시)

// .getDay()
// 날짜 인스턴스의 '요일'을 반환

const date8 = new Date()
const day = date8.getDay()

console.log(day)              // 3
console.log(getDayKo(day))    // 수요일

function getDayKo(day) {
  switch (day) {
    case 0: return '일요일'
    case 1: return '월요일'
    case 2: return '화요일'
    case 3: return '수요일'
    case 4: return '목요일'
    case 5: return '금요일'
    case 6: return '토요일'
  }
}

// .getTime()와 .setTime()
// `1970-01-01 00:00:00`(유닉스타임)부터 경과한,
// 날짜 인스턴스의 '밀리초(ms)'로 반환하거나 지정

const date9 = new Date()

console.log(date9.getTime())  // 1664348309502
console.log(date9)            // Wed Sep 28 2022 15:58:29 GMT+0900 (한국 표준시)

date9.setTime(1700000000000)
console.log(date9.getTime()) // 1700000000000
console.log(date9)           // Wed Nov 15 2023 07:13:20 GNT+0900 (한국 표준시)

Date.prototype.isAfter = function (date) {
  const a = this.getTime()
  const b = date.getTime()
  return a > b
}

const dd1 = new Date('Sat Jan 01 2022 00:00:00 GMT+0900 (한국표준시)')
const dd2 = new Date('Sun Jan 01 2023 00:00:00 GMT+0900 (한국표준시)')

console.log(d1.isAfter(d2))   // false
console.log(d2.isAfter(d1))   // true

// Date.now()
// `1970-01-01 00:00:00`(유닉스타임)부터 경과한,
// 메소드가 호출될 때의 '밀리초(ms)'로 반환

const time = new Date().getTime()
console.log(Date.now())   // 1664349597861
console.log(time)         // 1664349597861

setTimeout(() => {
  console.log(Date.now()) // 1664349598861
  console.log(time)       // 1664349597861
}, 1000)