// 时间复杂度最高的一集
// const rotate = function (nums, k) {
//   for (let i = 0; i < k; i++) {
//     nums.unshift(nums.pop())
//   }
//   return nums
// }

// const rotate = function (nums, k) {
//   let start = nums.length - k
//   nums = [...nums, ...nums]
//   nums.splice(0, start)
//   nums.length -= k
//   return nums
// }

// const rotate = function (nums, k) {
//   const arr = []
//   for (let i = 0; i < nums.length; i++) {
//     arr[(i + k) % nums.length] = nums[i]
//   }

//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = arr[i]
//   }
//   return nums
// }

// // const nums = [1, 2, 3, 4, 5, 6, 7]
// const nums = [1, 2]
// console.log(rotate(nums, 2))

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const pattern = [...nums]
  const n = pattern.length
  for (let i = 0; i < n; i++) {
    nums[(i + k) % n] = pattern[i]
  }
}
