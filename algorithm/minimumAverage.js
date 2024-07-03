/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
  nums.sort((a, b) => a - b)
  let ans = Number.MAX_SAFE_INTEGER
  for (let l = 0, r = nums.length - 1; l < r; l++, r--) {
    ans = Math.min(ans, (nums[l] + nums[r]) / 2)
  }
  return ans
}
