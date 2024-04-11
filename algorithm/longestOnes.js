// 给定一个二进制数组 nums 和一个整数 k，如果可以翻转最多 k 个 0 ，则返回 数组中连续 1 的最大个数 。
const longestOnes = function (nums, K) {
  let count = 0, result = 0
  let left = 0, right = 0
  let stack = []
  let i = 0
  while (right < nums.length) {
    nums[right] === 0 && stack.push(right) && count++
    if (count > K) {
      left = stack[i] + 1
      count--
      i++
    }
    result = Math.max(result, right - left + 1)
    right++
  }
  return result
}
const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], K = 3
// const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], K = 2
console.log(longestOnes(nums, K));