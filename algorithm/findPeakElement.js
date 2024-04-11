// 峰值元素是指其值严格大于左右相邻值的元素。
// 给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。
// 你可以假设 nums[-1] = nums[n] = -∞ 。
// 你必须实现时间复杂度为 O(log n) 的算法来解决此问题。

const findPeakElement = function (nums) {
  if (nums.length === 0) {
    return 0
  }
  if (nums.length === 2) {
    return nums[0] > nums[1] ? 0 : 1
  }
  if (nums[0] > nums[1]) {
    return 0
  }
  if (nums[nums.length - 1] > nums[nums.length - 2]) {
    return nums.length - 1
  }
  let left = 1, right = nums.length - 2; mid = 0
  while (left <= right) {
    mid = (right + left) >> 1
    if (nums[mid - 1] > nums[mid]) {
      right = mid - 1
    } else if (nums[mid + 1] > nums[mid]) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return mid
}
const nums = [1, 2, 4, 2]
console.log(findPeakElement(nums))