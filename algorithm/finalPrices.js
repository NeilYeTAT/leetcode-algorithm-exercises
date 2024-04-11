// 当前值 - 后面第一个小于当前值
// 构建递增栈
const findPrices = function (prices) {
  let result = Array.from(prices)
  let stack = []
  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[i] <= prices[stack[stack.length - 1]]) {
      result[stack[stack.length - 1]] = prices[stack[stack.length - 1]] - prices[i]
      stack.pop()
    }
    stack.push(i)
  }
  return result
}
const prices = [8, 4, 6, 2, 3]
console.log(findPrices(prices));