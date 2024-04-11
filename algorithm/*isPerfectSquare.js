// 给你一个正整数 num 。如果 num 是一个完全平方数，则返回 true ，否则返回 false 。
// 完全平方数 是一个可以写成某个整数的平方的整数。换句话说，它可以写成某个整数和自身的乘积。
// 再暴力破解就不礼貌了... 😅😅
const isPerfectSquare = function (num) {

  // if (num === 1) {
  //   return true
  // }
  if (num === 0) {
    return true
  }
  let left = 1
  let right = num
  let mid
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (mid * mid > num) {
      right = mid - 1
    } else if (mid * mid < num) {
      left = mid + 1
    } else {
      return true
    }
  }
  return false
}
console.log(isPerfectSquare(100))