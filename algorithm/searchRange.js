// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
// 如果数组中不存在目标值 target，返回 [-1, -1]。

const searchRange = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  let middle = Math.floor((left + right) >>> 2)
  while (left <= right) {
    if (target > nums[middle]) {
      left = middle + 1
      middle = Math.floor((left + right) >>> 2)
    } else if (target < nums[middle]) {
      right = middle - 1
      middle = Math.floor((left + right) >>> 2)
    } else {
      let find = middle
      while (nums[middle - 1] === target) {
        middle--
      }
      while (nums[find + 1] === target) {
        find++
      }
      return [middle, find]
    }
  }
  return [-1, -1]
}

let nums = [5, 7, 7, 8, 8, 10]
console.log(searchRange(nums, 6))
