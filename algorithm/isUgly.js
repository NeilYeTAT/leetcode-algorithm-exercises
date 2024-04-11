// 丑数 就是只包含质因数 2、3 和 5 的正整数。
// 给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。


// const isUgly = function (n) {
//   if (n < 1) {
//     return false
//   }
//   if (n === 1) {
//     return true
//   }
//   let num = n + ''
//   while (1) {
//     let flag = 1
//     if (num[num.length - 1] % 5 === 0) {
//       n = n / 5
//       num = n + ''
//       continue
//     }
//     let gemini = 0
//     for (let i = 0; i < num.length; i++) {
//       gemini += num[i] - 0
//       if (i === num.length - 1 && gemini % 3 === 0) {
//         n = n / 3
//         num = n + ''
//         flag = 0
//         break
//       }
//     }
//     if (num[num.length - 1] % 2 === 0 && num - 0 !== 1) {
//       n = n / 2
//       num = n + ''
//       continue
//     }
//     if (num - 0 === 1) {
//       return true
//     }
//     if (num - 0 === 1) {
//       return true
//     }
//     if (flag) {
//       return false
//     }
//   }
// }

// const n = 9
// console.log(isUgly(n))
// 注意，2 3 5 先除哪一个都是可以的，因为乘法本身具有交换律。--------------------🤡

const isUgly = function (n) {
  if (n < 1) {
    return false
  }
  if (n !== 1) {
    let flag = 1
    while (n % 2 === 0) {
      n = n / 2
      flag = 0
    }
    while (n % 5 === 0) {
      n = n / 5
      flag = 0
    }
    while (n % 3 === 0) {
      n = n / 3
      flag = 0
    }
    if (flag) {
      return false
    }
  }
  return n === 1
}
console.log(isUgly(14))