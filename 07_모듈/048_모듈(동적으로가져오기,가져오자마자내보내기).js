setTimeout(() => {
  import('./module2.js').then(abc => {
    console.log(abc)    // {default: 123, arr: Array(0), hello: f hello(), str: "ABC"}
  })
}, 1000)

setTimeout(async () => {
  const abc = await import('./module2.js')
  console.log(abc)  // {default: 123, arr: Array(0), hello: f hello(), str: "ABC"}
}, 1000)

import { a } from './a.js'
import { b } from './b.js'

console.log(a())    // 123
console.log(b())    // 456

import {a, b} from '.utils.js'

console.log(a())    // 123
console.log(b())    // 456