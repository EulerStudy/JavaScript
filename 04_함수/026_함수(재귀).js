// 재귀(Recursive)

let i = 0
const a = () => {
  console.log('A')
  i += 1
  if (i < 4) {
    a()
  }
}

a()

const userA = { name: 'A', parent: null, }
const userB = { name: 'B', parent: userA, }
const userC = { name: 'C', parent: userB, }
const userD = { name: 'C', parent: userC, }

const getRootUser = user => {
  if (user.parent) {
    return getRootUser(user.parent)
  }
  return user
}

console.log(getRootUser(userD))   // { name: 'A', parent: null, }
console.log(getRootUser(userC))   // { name: 'A', parent: null, }
console.log(getRootUser(userB))   // { name: 'A', parent: null, }
console.log(getRootUser(userA))   // { name: 'A', parent: null, }

