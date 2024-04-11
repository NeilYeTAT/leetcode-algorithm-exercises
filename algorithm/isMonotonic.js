// 如果数组是单调递增或单调递减的，那么它是 单调 的。
// 如果对于所有 i <= j，nums[i] <= nums[j]，那么数组 nums 是单调递增的。 如果对于所有 i <= j，nums[i]> = nums[j]，那么数组 nums 是单调递减的。
// 当给定的数组 nums 是单调数组时返回 true，否则返回 false。


const isMonotonic = function (nums) {
  let isAdd = 1
  let isReduce = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] !== undefined) {
      if (nums[i] < nums[i + 1] && isAdd) {
        isReduce = 0
        continue
      } else if (nums[i] > nums[i + 1] && isReduce) {
        isAdd = 0
        continue
      } else if (nums[i] === nums[i + 1]) {
        continue
      } else {
        return false
      }
    }
  }
  return true
}
console.log(isMonotonic([1, 3, 0]))