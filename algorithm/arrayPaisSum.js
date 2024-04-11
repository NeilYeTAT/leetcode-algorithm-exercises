// 给定长度为 2n 的整数数组 nums ，你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从 1 到 n 的 min(ai, bi) 总和最大。

// 返回该 最大总和 。

const arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b)
  let max = 0
  for (let i = 0; i < nums.length; i += 2) {
    max += nums[i]
  }
  return max
}

const nums = [1, 4, 3, 2]
console.log(arrayPairSum(nums))