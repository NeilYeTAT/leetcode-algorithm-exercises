// 计数器 I , 简单闭包

// const createCounter = function (n) {
//   let radix = n
//   return function () {
//     return radix++
//   }
// }
// const test = createCounter(3)
// test()
// test()
// console.log(test())

const createCounter = function (init) {
  let origin = init
  let radix = init
  function reset() {
    return radix
  }
  function increment() {
    return radix++
  }
  function decrement() {
    return  radix--
  }
}

const test = createCounter(4)
