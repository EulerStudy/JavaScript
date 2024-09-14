// import 키워드는 항상 최상단에 작성해야 한다.

import number from './module2.js'

console.log(number)   // 123

import number, { str, arr, hello } from './module2.js'
console.log(str)    // ABC
console.log(arr)    // []
console.log(hello)  // f hello() {}

import { str as abc, arr, hello as h } from './module2.js'
console.log(abc)    // abc
console.log(h)      // f hello() {}

import * as abc from './module2.js'
console.log(abc)    // {default: 123, arr: Array(0), hello: f hello(), str: "ABC"}