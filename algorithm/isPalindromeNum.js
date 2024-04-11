// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
// 例如，121 是回文，而 123 不是。

const isPalindrom = function (x) {
  if (x < 0) return false
  let arr = [...x.toString()]
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false
    }
    left++
    right--
  }
  return true
}
const x = 10
console.log(isPalindrom(x))