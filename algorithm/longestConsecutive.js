// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

// const longestConsecutive = function (nums) {
//   if (nums.length === 0) {
//     return 0
//   }
//   nums.sort((a, b) => a - b)
//   let maxLen = 1
//   let temp = 1
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] === nums[i + 1]) {
//       continue
//     }
//     if (nums[i] + 1 === nums[i + 1]) {
//       temp++
//     } else {
//       maxLen = maxLen >= temp ? maxLen : temp
//       temp = 1
//     }
//   }
//   maxLen = maxLen >= temp ? maxLen : temp
//   return maxLen
// }

const longestConsecutive = function (nums) {
  const set = new Set()
  for (let item of nums) {
    set.add(item)
  }
  let res = 0,
    count = 0
  for (let item of set) {
    if (!set.has(item - 1)) {
      count = 1
      let cur = item
      while (set.has(cur + 1)) {
        cur++
        count++
      }
      res = Math.max(count, res)
    }
  }
  return res
}
const nums = [1, 2, 0, 1]
console.log(longestConsecutive(nums))
