// 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c
// 两层for循环, 果咩内

// const judgeSquareSum = function (c) {
//   for (let i = 0; i <= c; i++) {
//     for (let j = 0; j <= c; j++) {
//       if(i * i + j * j === c) {
//         return true
//       }
//     }
//   }
//   return false
// }
// console.log(judgeSquareSum(9))

// 双指针法, 小子😎
const judgeSquareSum = function (c) {
  let left = 0
  let right = Math.floor(Math.sqrt(c))
  while (left <= right) {
    if (left * left + right * right === c) {
      return true
    } else if (left * left + right * right >= c) {
      right--
    } else {
      left++
    }
  }
  return false
}
console.log(judgeSquareSum(5))