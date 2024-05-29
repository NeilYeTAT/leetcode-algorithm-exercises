const countGoodTriplets = function (arr, a, b, c) {
  let cnt = 0
  const n = arr.length
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      for (let k = j + 1; k < n; ++k) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
          ++cnt
        }
      }
    }
  }
  return cnt
}
