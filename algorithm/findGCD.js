// 给你一个整数数组 nums ，返回数组中最大数和最小数的 最大公约数 。

// 两个数的 最大公约数 是能够被两个数整除的最大正整数。

// const findGCD = function (nums) {
//   nums.sort((a, b) => a - b)
//   let maxNum = nums[nums.length - 1]
//   let minNum = nums[0]
//   let min = minNum
//   let remainder = maxNum % minNum
//   let temp = null
//   while (remainder) {
//     temp = remainder
//     remainder = min % remainder
//     min = temp
//   }
//   return min
// }
function gcd(a, b) {
  if (b === 0) {
    return a
  } else {
    return gcd(b, a % b)
  }
}
const findGCD = function (nums) {
  nums.sort((a, b) => a - b)
  let maxNum = nums[nums.length - 1]
  let minNum = nums[0]
  return gcd(maxNum, minNum)
}
console.log(findGCD([2, 5, 6, 9, 10]))



