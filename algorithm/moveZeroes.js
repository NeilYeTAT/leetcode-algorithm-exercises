// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 双指针, 碰到零就做个标记, 后面直接补零, 秒了.

// let nums = [1, 3, 0, 5, 9, 0, 19, 0, 12]
// let nums = [0, 1, 2, 4, 5]

// const moveZeroes = function (nums) {
//   let slow = 0
//   let mark = 0
//   for (let fast = 0; fast < nums.length; fast++) {
//     if (nums[fast] === 0) {
//       nums[slow] = nums[fast + 1]
//       mark++
//     } else {
//       nums[slow] = nums[fast]
//       slow++
//     }
//   }
//   for (let index = nums.length - mark; index < nums.length; index++) [
//     nums[index] = 0
//   ]
//   return nums
// }

// console.log(moveZeroes(nums))

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nums = [1, 2, 3, 0, 0, 3, 4]
var moveZeroes = function (nums) {
  let slow = 0
  for (slow = 0, fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast]
      slow++
    }
  }
  nums.fill(0, slow)
  return nums
}

console.log(moveZeroes(nums))
