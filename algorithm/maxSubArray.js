/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let res = Number.MIN_SAFE_INTEGER
  let sum = 0
  for (let item of nums) {
    if (sum >= 0) {
      sum += item
    } else {
      sum = item
    }
    res = Math.max(sum, res)
  }
  return res
}

// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const nums = [-1, -12, -1, -1000]
// const nums = [-2, 1, -3]
console.log(maxSubArray(nums))
