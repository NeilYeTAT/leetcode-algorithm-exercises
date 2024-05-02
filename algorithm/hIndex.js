
const hIndex = function (citations) {
  let left = 1, right = citations.length
  let n = citations.length
  while (left <= right) {
    let mid = Math.floor((right - left) / 2 + left)
    if (citations[n - mid] >= mid) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return right
}