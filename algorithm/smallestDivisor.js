
const smallestDivisor = function (nums, threshold) {
  let scope = Math.max(...nums)
  let left = 0, right = scope
  let ans = 0
  while (left <= right) {
    let divisor = parseInt(left + ((right - left) >> 1))
    if (isOk(divisor)) {
      ans = divisor
      right = divisor - 1
    } else {
      left = divisor + 1
    }
  }
  function isOk(divisor) {
    let sum = 0
    for (let item of nums) {
      sum += Math.ceil(item / divisor)
    }
    if (sum <= threshold) {
      return true
    } else {
      return false
    }
  }
  return ans
}