// 1)
function hello () {
  console.log('Hello')
}

hello()
console.log(hello)    // f hello() { console.log(hello) }

// 2)
function getNumber() {
  return 123
}
console.log(getNumber())        // 123
console.log(typeof getNumber)   // function
console.log(typeof getNumber()) // number

// 3)
const getNumber = function() {
  return 123
}

// 4)
const a = function() {
  console.log('A')
}
const b = function(c) {
  console.log(c)
  c()   // A
}

b(a)    // f () {console.log("A")}


