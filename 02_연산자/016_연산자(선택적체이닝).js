// 선택적 체이님(Optional Chaining)

const user1 = {}
console.log(user1.name)    // undefined

const user2 = undefined
console.log(user2?.name)   // undefined

const userA = {
  name: 'HEROPY',
  age: 85,
  address: {
    country: 'Korea',
    city: 'Seoul',
  }
}

const userB = {
  name: "Neo",
  age: 22
}

function getCity1(user) {
  return user.address?.city
}

console.log(getCity1(userA))   // Seoul
console.log(getCity1(userB))   // undefined

function getCity2(user) {
  return user.address?.city || '주소 없음'
}

console.log(getCity2(userA))   // Seoul
console.log(getCity2(userB))   // 주소 없음