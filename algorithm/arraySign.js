// 已知函数 signFunc(x) 将会根据 x 的正负返回特定值：
// 如果 x 是正数，返回 1 。
// 如果 x 是负数，返回 -1 。
// 如果 x 是等于 0 ，返回 0 。
// 给你一个整数数组 nums 。令 product 为数组 nums 中所有元素值的乘积。
// 返回 signFunc(product) 。

const arraySign = function (nums) {
  let negativeCounts = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return 0
    }
    if (nums[i] < 0) {
      negativeCounts++
    }
  }
  if (negativeCounts % 2 === 0) {
    return 1
  }
  return -1
}