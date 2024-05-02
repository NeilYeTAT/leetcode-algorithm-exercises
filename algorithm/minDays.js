
const minDays = function (bloomDay, m, k) {
  if (bloomDay.length < m * k) {
    return -1
  }
  let left = Math.min(...bloomDay)
  let right = Math.max(...bloomDay)
  let ans = -1

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
    let flowers = 0
    let count = 0
    for (let i = 0; i < bloomDay.length; i++) {
      if (bloomDay[i] <= mid) {
        count++
      } else {
        flowers++
        count = 0
        continue
      }

      if (count === k) {
        flowers++
        count = 0
      }
    }

    if (flowers >= m) {
      return true
    } else {
      return false
    }
  }
}

const bloomDay = [1, 10, 3, 10, 2], m = 3, k = 1
// const bloomDay = [7, 7, 7, 7, 12, 7, 7], m = 2, k = 3
// const bloomDay = [1000000000,1000000000], m = 1, k = 1
// const bloomDay = [1, 10, 3, 10, 2], m = 3, k = 1
console.log(minDays(bloomDay, m, k))