
// 二分答案, 区间在...
const minimizedMaximum = function (n, quantities) {
  let result = 0
  let left = 1, right = Math.max(...quantities)
  while (left <= right) {
    let mid = Math.floor((right - left) / 2 + left)
    if (isOk(mid)) {
      result = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return result
  function isOk(mid) {
    let count = 0
    for (let item of quantities) {
      count += Math.ceil(item / mid)
    }
    if (count <= n) {
      return true
    } else {
      return false
    }
  }
}