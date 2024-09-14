// 데이터 타입 확인

console.log(typeof 'Hello')       // string
console.log(typeof 123)           // number
console.log(typeof false)         // boolean
console.log(typeof undefined)     // undefined
console.log(typeof null)          // object
console.log(typeof [])            // object
console.log(typeof {})            // object
console.log(typeof function(){})  // function

console.log([].constructor)   // Array
console.log({}.constructor)   // Object
console.log(Object.prototype.toString.call(null).slice(8,-1))   // Null

function checkType(data) {
  return Object.prototype.toString.call(data).slice(8,-1)
}

console.log(checkType('Hello'))     // String
console.log(checkType(123))         // Number
console.log(checkType(false))       // Boolean
console.log(checkType(undefined))   // Undefined
console.log(checkType(null))        // Null
console.log(checkType([]))          // Array
console.log(checkType({}))          // Object
console.log(checkType(function(){}))    // Function
