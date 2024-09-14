// for 반복문

for (let i = 0; i < 10; i += 1) {
  console.log(i)  // 0 1 2 3 4 5 6 7 8 9
}

for (let i = 9; i > -1; i -= 1) {
  if (i < 4) {
    break
  }
  if (i % 2 == 0) {
    continue
  }
  console.log(i)  // 9 7 5
}

// for of 반복문 : 배열 데이터

const fruits = ['Apple', 'Banana', 'Cherry']
for (let i = 0; i < fruits.length; i += 1) {
  console.log(fruits[i])  // Apple Banana Cherry
}

for (const fruit of fruits) {
  console.log(fruit)    // Apple Banana Cherry
}

const users = [
  {
    name: 'Heropy',
    age: 85,
  },
  {
    name: 'Neo',
    age: 22,
  },
  {
    name: 'Lewis',
    age: 34,
  }
]

for (let i = 0; i < users.length; i += 1) {
  console.log(users[i])     // {name: 'Heropy', age: 85}  {name: 'Neo', age: 22}  {name: 'Lewis', age: 34}
}

for (const user of users) {
  console.log(user)         // {name: 'Heropy', age: 85}  {name: 'Neo', age: 22}  {name: 'Lewis', age: 34}
}

// for in 반복문: 객체 데이터는 for in 반복문을 써야함

const userA = {
  name: 'Heropy',
  age: 85,
  isValid: true,
  email: 'thesecon@gamil.com',
}

for (const key in user) {
  console.log(key)        // name age isValid email
  console.log(user[key])  // Heropy 85 true thesecon@gmail.com
}

// 
const arr = [1, 2, 3]

let htmlString = ''

for(let i = 0; i < arr.length; i++) {
  htmlString += '<div>' + arr[i] + '</div>'
}

function myProc(item) {
  return '<div>' + item + '</div>'
}

console.log(arr.map(myProc).join(''))   // <div>1</div><div>2</div><div>3</div>

arr.forEach(myProc)

console.log(htmlString)   // // <div>1</div><div>2</div><div>3</div>