// 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。
// 输入: temperatures = [73,74,75,71,69,72,76,73]
// 输出: [1,1,4,2,1,1,0,0]
// 倒序遍历, 压入栈中, 
// 如果该元素大于栈顶, 栈顶弹出, 继续比较, 直到为0, 压入栈中
// 如果该元素小于栈顶, 记录为1
// 相同元素保留左边

// const dailyTemperatures = function (temperatures) {
//   let result = []
//   let stack = []
//   stack.push(temperatures[temperatures.length - 1])

//   let count = 0
//   for (let i = temperatures.length - 2; i > 0; i--) {

//     while (stack.length !== 0) {
//       if (stack[stack.length - 1] < temperatures[i]) {
//         stack.pop()
//         count++
//         if (stack.length === 0) {
//           stack.push(temperatures[i])
//           result.push(0)
//           break
//         }
//       } else {
//         result.push(count)
//         stack.push(temperatures[i])
//         count = 0
//         stack.pop()
//         break
//       }
//     }
//     if (stack.length === 0) {
//       stack.push(temperatures[i])
//     }
//   }
//   // result.push(0)
//   return result.reverse()
// }
// console.log(dailyTemperatures([30, 60, 90]))

// 暴力解法超时
/** 
 *   // let result = []
  // for (let i = 0; i < temperatures.length; i++) {
  //   let key = 1
  //   for (let j = i + 1; j < temperatures.length; j++) {
  //     if (temperatures[j] > temperatures[i]) {
  //       result.push(j - i)
  //       key = 0
  //       break
  //     }
  //   }
  //   if (key) {
  //     result.push(0)
  //   }
  // }
  // return result
**/
const dailyTemperatures = function (temperatures) {
  const stack = []
  const result = new Array(temperatures.length).fill(0)
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      result[stack[stack.length - 1]] = i - stack[stack.length - 1]
      stack.pop()
    }
    stack.push(i)
  }
  return result
}
// console.log(dailyTemperatures([3, 4, 5, 6]))
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))