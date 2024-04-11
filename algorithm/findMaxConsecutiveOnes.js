// 一眼双指针, 小子
// nums = [1,1,0,1,1,1]
// 输出：3
// 解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3

let nums = [1, 1, 0, 1, 1, 0, 1]
const findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0
  let count = 0
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === 1) {
      count++
    } else {
      // nums[i] 不等于 1, 等于 0 时
      if (count > maxCount) {
        maxCount = count
      }
      count = 0
    }
  }
  return maxCount
}
console.log(findMaxConsecutiveOnes(nums))
