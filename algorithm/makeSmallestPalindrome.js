const makeSmallestPalindrome = function (s) {
  let arr = s.split("")
  let left = 0,
    right = arr.length - 1
  for (; left < right; left++, right--) {
    if (arr[left] !== arr[right]) {
      if (arr[left] < arr[right]) {
        arr[left] = arr[right]
      } else {
        arr[right] = arr[left]
      }
    }
  }
  return arr.join("")
}
