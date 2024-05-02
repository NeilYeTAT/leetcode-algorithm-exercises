
const maximumCandies = function (candies, k) {
  let sum = candies.reduce((acc, cur) => acc + cur, 0)
  if (sum / k < 1) {
    return 0
  }
  let result = 0
  let left = 0, right = Math.floor(sum / k)
  while (left <= right) {
    let mid = Math.floor((right - left) / 2 + left)
    if (isOk(mid)) {
      result = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return result

  function isOk(mid) {
    let count = 0
    for (let item of candies) {
      count += Math.floor(item / mid)
    }
    if (count >= k) {
      return true
    } else {
      return false
    }
  }
}
const candies = [5, 8, 6], k = 3
console.log(maximumCandies(candies, k))
