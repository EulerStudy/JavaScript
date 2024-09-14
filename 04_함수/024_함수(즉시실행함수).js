// 즉시실행함수(IIFE, Inmmediately-Invoked Function Expression)

const a = 7
const double = () => {
  console.log(a * 2)
}
double()

;(() => {
  console.log(a * 2)
})()

;(() => {})()         // (F)()
;(function () {})()   // (F)()
;(function () {}())   // (F())
;!function () {}()    // !F()
;+function () {}()    // +F()

;((a, b) => {
  console.log(a)    // 1
  console.log(b)    // 2
})(1, 2)