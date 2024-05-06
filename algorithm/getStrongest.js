const getStrongest = function (arr, k) {
  arr.sort((a, b) => a - b)
  let ans = []
  let mid = Math.floor((arr.length - 1) / 2)
  for (let l = 0, r = arr.length - 1; k > 0; ) {
    if (Math.abs(arr[l] - arr[mid]) > Math.abs(arr[r] - arr[mid])) {
      ans.push(arr[l])
      l++
    } else {
      ans.push(arr[r])
      r--
    }
    k--
  }
  return ans
}
