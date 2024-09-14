// if 조건문

function isPositive(number) {
  if (number > 0) {
    return '양수'
  } else if (number < 0) {
    return '음수'
  } else {
    return '0'
  }
}
console.log(isPositive(1))
console.log(isPositive(-2))
console.log(isPositive(0))

// switch 조건문

function price(fruit) {
  switch (fruit) {
    case 'Apple':
      return 1000
    case 'Banana':
      return 1500
    case 'Cherry':
      return 2000
    default:
      return 0
  }
}

console.log(price('Apple'))   // 1000
console.log(price('Banana'))  // 1500
console.log(price('Cherry'))  // 2000
console.log(price('Hello'))   // 0


