
const getAverages = function (nums, k) {
  let left = 0, right = 0, sum = 0
  let result = new Array(nums.length)
  if (nums.length <= k) {
    return result.fill(-1)
  }
  let will = 0
  let key = 1
  while (right < 2 * k + 1) {
    sum += nums[right]
    if (right === k) {
      key = 0
    }
    if (key) {
      result[will] = -1
      will++
    }
    right++
  }
  while (right <= nums.length) {
    result[will] = parseInt(sum / (2 * k + 1))
    sum -= nums[left]
    left++
    sum += nums[right]
    right++
    will++
  }
  result.fill(-1, will)
  return result
}
console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3))