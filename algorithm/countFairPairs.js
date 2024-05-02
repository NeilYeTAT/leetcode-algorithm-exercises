
const countFairPairs = function (nums, lower, upper) {
  nums.sort((a, b) => a - b)
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > upper && nums[i] > 0) {
      return result
    }

    let left = i + 1, right = nums.length - 1
    let minVal = lower - nums[i], maxVal = upper - nums[i]
    let mid = 0
    // find lower number
    while (left <= right) {
      mid = Math.floor((right - left) / 2 + left)
      if (nums[mid] >= minVal) {
        right = mid - 1
      } else if (nums[mid] < minVal) {
        left = mid + 1
      }
    }
    let tempLeft = left
    right = nums.length - 1
    while (left <= right) {
      mid = Math.floor((right - left) / 2 + left)
      if (nums[mid] <= maxVal) {
        left = mid + 1
      } else if (nums[mid] > maxVal) {
        right = mid - 1
      }
    }
    result += left - tempLeft
  }
  return result
}
// const nums = [0, 1, 4, 4, 5, 7], lower = 3, upper = 6
const nums = [-5, -7, -5, -7, -5], lower = -12, upper = -12
console.log(countFairPairs(nums, lower, upper))