// 换句话讲，如果 nums 中正整数的数目是 pos ，而负整数的数目是 neg ，返回 pos 和 neg二者中的最大值。

// const maximumCount = function (nums) {
//   let pos = 0, neg = 0
//   // 左为负数, 右边为正数
//   let left = 0, right = nums.length - 1
//   while (left <= right) {
//     let mid = parseInt((right - left) / 2 + left)
//     if (nums[mid] > 0) {
//       right = mid - 1
//     } else if (nums[mid] < 0) {
//       left = mid + 1
//     } else {

//     }
//     right--
//     left++
//   }
// }

const maximumCount = function (nums) {
  let count = 0, zero = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zero++
      continue
    }
    if (nums[i] < 1 && nums[i] !== 0) {
      count++
    } else {
      break
    }
  }
  return Math.max(count, nums.length - count - zero)
}
const nums = [-3, -2, -1, 0, 0, 1, 2]
console.log(maximumCount(nums));