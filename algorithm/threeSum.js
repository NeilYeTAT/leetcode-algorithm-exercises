// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
// 你返回所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。

// i, j, k 都是原数组的下标索引值, 哈希法判断, 哈希表
// 返回的值是数组中的值, 不是下标, 还需要判断值必须不同, 去重
// Set? Map? Array?

// const threeSumF = function (nums) {
//   nums.sort((a, b) => a - b)
//   let result = []
//   if (nums[0] > 0 || nums[nums.length - 1] < 0 || nums.length < 3) {
//     return result
//   }
//   for (let i = 0; i < nums.length - 2; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) {
//       continue
//     }
//     let left = i + 1
//     let right = nums.length - 1
//     while (left < right) {
//       let sum = nums[i] + nums[left] + nums[right]
//       if (sum === 0) {
//         result.push([nums[i], nums[left], nums[right]])
//         while (left < right && nums[left] === nums[left + 1]) {
//           left++
//         }
//         while (left < right && nums[right] === nums[right - 1]) {
//           right--
//         }
//         left++
//         right--
//       } else if (sum < 0) {
//         left++
//       } else {
//         right--
//       }
//     }
//   }
//   return result
// }

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  const res = []
  if (nums[0] > 0 || nums[nums.length - 1] < 0) return []
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let target = -nums[i]
    for (let l = i + 1, r = nums.length - 1; l < r; ) {
      if (nums[l] + nums[r] > target) {
        r--
      } else if (nums[l] + nums[r] < target) {
        l++
      } else {
        res.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] === nums[l + 1]) l++
        while (l < r && nums[r] === nums[r - 1]) r--
        l++
        r--
      }
    }
  }
  return res
}

// const nums = [0, 1, 0]
const nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))
