// 暴力破解
// 直接for循环
// 给你一个非负整数 x ，计算并返回 x 的 算术平方根 , 8 => 2, 9 => 3, 4 => 2
// 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
// 执行时间长达190多毫秒, 玩呢 😅😅, 二分搜索法, 启动! 😋
// -----------------------------------------------------------
// const mySqrt = function (x) {
//   for (let i = 1; i <= parseInt(x / 2) + 1; i++) {
//     if(i * i === x) {
//       return i
//     } else if( i * i < x) {
//       continue
//     } else {
//       return i-1
//     }
//   }
// } 
// console.log(mySqrt(5))
// -----------------------------------------------------------
// 1, 2
const mySqrt = function (x) {
  let left = 1
  let right = x
  let mid
  if (x === 0) {
    return 0
  }
  if (x === 1) {
    return 1
  }
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (mid * mid > x) {
      right = mid - 1
    } else if (mid * mid < x) {
      if ((mid + 1) * (mid + 1) > x) {
        return mid
      }
      left = mid + 1
    } else {
      return mid
    }
  }
  return mid
}
console.log(mySqrt(11))