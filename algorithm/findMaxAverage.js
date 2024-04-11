// 给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。
// 请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。
// 任何误差小于 10-5 的答案都将被视为正确答案。


const nums = [1, 12, -5, -6, 50, 3]
const findMaxAverage = function (nums, k) {
  let maxAverage = Number.NEGATIVE_INFINITY
  let sum = 0
  let slow = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (i - slow + 1 === k) {
      maxAverage = maxAverage > sum ? maxAverage : sum
      sum = sum - nums[slow]
      slow++
    }
  }
  return maxAverage / k
}
console.log(findMaxAverage(nums, 4))