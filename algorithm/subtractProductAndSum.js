// 给你一个整数 n，请你帮忙计算并返回该整数「各位数字之积」与「各位数字之和」的差。

// 输入：n = 234
// 输出：15 
// 各位数之积 = 2 * 3 * 4 = 24 
// 各位数之和 = 2 + 3 + 4 = 9 
// 结果 = 24 - 9 = 15

const subtractProductAndSum = function (n) {
  let str = n.toString()
  let product = 1
  let sum = 0
  for (let i = 0; i < str.length; i++) {
    sum += str[i] - 0
    product *= str[i] - 0
  }
  return product - sum
}
subtractProductAndSum(234)