// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。


// const nums = [1000000000, 1000000000, -1000000000, -1000000000, -1000000000]
// const majorityElement = function (nums) {
// //   const arr = nums.sort()
// //   return arr[Math.floor(arr.length / 2)]
// // }
// console.log(majorityElement(nums))
// 摩尔投票法
const nums = [1000000000, 1000000000, -1000000000, -1000000000, -1000000000]
const majorityElement = function (nums) {
  let now = nums[0]
  let will = 1
  for (let i = 1; i < nums.length; i++) {
    if (will === 0) {
      now = nums[i]
    }
    if (now === nums[i]) {
      will++
    } else {
      will--
    }
  }
  return now
}
console.log(majorityElement(nums))