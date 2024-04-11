// 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。

// 请返回 nums 的动态和。

const runningSum = function (nums) {
  let sum = 0
  let result = []
  for (let item of nums) {
    sum += item
    result.push(sum + item)
  }
  return result
}
