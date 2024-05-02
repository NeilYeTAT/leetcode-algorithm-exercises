
const successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b)
  let result = []
  // 首先找到下标最小且符合要求的
  for (let i = 0; i < spells.length; i++) {
    let left = 0, right = potions.length - 1
    let len = right
    while (left <= right) {
      let mid = Math.floor((right - left) / 2 + left)
      if (isOk(mid, spells[i])) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    result[i] = len - right
  }
  return result
  function isOk(mid, temp) {
    if (potions[mid] * temp >= success) {
      return true
    } else {
      return false
    }
  }
}