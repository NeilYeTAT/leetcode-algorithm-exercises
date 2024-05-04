const splitArray = function (nums, k) {
  let left = 0,
    right = nums.reduce((acc, cur) => acc + cur, 0)
  let ans = 0
  while (left <= right) {
    let mid = Math.floor((right - left) / 2 + left)
    if (isOk(mid)) {
      ans = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return ans
  function isOk(mid) {
    let sum = 0
    let count = 1
    for (let item of nums) {
      if (item > mid) { 
        return false
      }

      if (sum + item > mid) {
        count++
        sum = item
      } else {
        sum += item
      }
    }
    return count <= k
  }
}
