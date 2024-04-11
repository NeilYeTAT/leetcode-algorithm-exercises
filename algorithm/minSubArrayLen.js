// 给定一个含有 n 个正整数的数组和一个正整数 target 。
// 找出该数组中满足其总和大于等于 target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

// 滑动窗口??, 双指针, 小子!

// let nums = [2, 3, 1, 2, 4, 3]
// let nums = [2, 3, 1, 2, 4, 3]
// // let nums = [1, 4, 4]
// const minSubArrayLen = function (target, nums) {
//   let result = 0
//   let index = 0
//   let end = 0
//   let i
//   for (i = 0; i < nums.length; i++) {
//     result = result + nums[i]
//     while ((result >= target)) {
//       result = result - nums[index]
//       index++
//     }
//   }
//   console.log(index - 1, end)
// }
// minSubArrayLen(7, nums)

// 给定一个含有 n 个正整数的数组和一个正整数 target 。
// 找出该数组中满足其总和大于等于 target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 
// 返回值是长度, 双指针, i 是快指针负责遍历
// 满指针负责记录下标, 长度不用记录
// const nums = [1,1, 1,1,1,1,1,1,1,1,1]
// const minSubArrayLen = function (target, nums) {
//   let slow = 0
//   let result = 0
//   let minLength = nums.length + 1
//   let nowLength = 0
//   for (let i = 0; i < nums.length; i++) {
//     result = result + nums[i]
//     if (nums[i] >= target) {
//       return 1
//     }
//     // 一旦结果大于目标值, 慢指针向右移动, 后面的值不一定比现有的值大
//     // 进入循环判断
//     while (result >= target) {
//       nowLength = i - slow + 1
//       minLength = minLength < nowLength ? minLength : nowLength
//       result = result - nums[slow]
//       slow++
//     }
//   }
//   if (minLength === nums.length + 1) {
//     return 0
//   }
//   return minLength
// }
// console.log(minSubArrayLen(11, nums))

const minSubArrayLen = function (target, nums) {
  let len = Number.MAX_SAFE_INTEGER
  let sum = 0
  for (let left = 0, right = 0; right < nums.length; right++) {
    sum += nums[right]
    while (sum >= target) {
      len = Math.min(len, right - left + 1)
      sum -= nums[left]
      left++
    }
  }
  return (len === Number.MAX_SAFE_INTEGER) ? 0 : len
}