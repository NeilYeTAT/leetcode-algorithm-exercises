// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

// 返回 你能获得的 最大 利润 。

// const maxProfit = function (prices) {
//   let min = prices[0]
//   let max = prices[0]
//   let sum = 0
//   let key = 0
//   for (let item of prices) {
//     if (min > item) {
//       sum += max - min
//       min = item
//       max = item
//     } else if (max < item) {
//       sum += max - min
//       max = item
//       min = item
//       if (item === prices[prices.length - 1]) {
//         key = 1
//       }
//     } else {

//     }
//   }
//   if (key) {
//     return sum + max - min
//   }
//   return sum
// }
// console.log(maxProfit([7, 1, 5, 3, 6, 4]))

// 第一天买第二天卖
// 连续上涨最后一天卖
// 连续下降不买卖
// 每天买每天都卖
// i 为预测值
const maxProfit = function (prices) {
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    let temp = prices[i] - prices[i - 1]
    if (temp > 0) {
      profit += temp
    }
  }
  return profit
}




