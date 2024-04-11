// 给你一个整数数组 nums 和两个正整数 m 和 k 。
// 请你返回 nums 中长度为 k 的 几乎唯一 子数组的 最大和 ，如果不存在几乎唯一子数组，请你返回 0 。
// 如果 nums 的一个子数组有至少 m 个互不相同的元素，我们称它是 几乎唯一 子数组。
// 子数组指的是一个数组中一段连续 非空 的元素序列。

// const maxSum = function (nums, m, k) {
//   const hashMap = new Map()
//   let window = 0
//   let result = 0
//   let left = 0
//   for (let right = 0; right < nums.length; right++) {
//     window += nums[right]
//     hashMap.set(nums[right], hashMap.get(nums[right]) + 1 || 1)
//     if (right - left + 1 > k) {
//       window -= nums[left]
//       hashMap.set(nums[left], hashMap.get(nums[left]) - 1)
//       if (hashMap.get(nums[left]) === 0) {
//         hashMap.delete(nums[left])
//       }
//       left++
//     }
//     if (right - left + 1 === k && hashMap.size >= m) {
//       result = Math.max(result, window)
//     }
//   }
//   return result
// }
// const nums = [1, 1, 2], m = 1, k = 1
// const nums = [1, 2, 1, 2, 1, 2, 1], m = 3, k = 3
// nums = [2, 6, 7, 3, 1, 7], m = 3, k = 4
// const nums = [1, 1, 1, 3], m = 2, k = 2
// console.log(maxSum(nums, m, k))
// const nums = [5, 9, 9, 2, 4, 5, 4], m = 1, k = 3
const maxSum = function (nums, m, k) {
  const hashMap = new Map()
  let window = 0
  let result = 0
  let left = 0
  let right = 0
  while (right < k) {
    window += nums[right]
    hashMap.set(nums[right], hashMap.get(nums[right]) + 1 || 1)
    right++
  }
  if (m === 1) {
    result = window
  }
  while (right < nums.length) {
    if (right - left + 1 > k) {
      window -= nums[left]
      hashMap.set(nums[left], hashMap.get(nums[left]) - 1)
      if (hashMap.get(nums[left]) === 0) {
        hashMap.delete(nums[left])
      }
      left++
      hashMap.set(nums[right], hashMap.get(nums[right] + 1 || 1))
      window += nums[right]
    }
    if (hashMap.size >= m && right - left + 1 === k) {
      result = Math.max(result, window)
    }
    right++
  }
  return result
}
const nums = [1], m = 1, k = 1
// const nums = [1, 2, 1, 2, 1, 2, 1], m = 3, k = 3
// const nums = [1, 1, 1, 3], m = 2, k = 2
// const nums = [5, 9, 9, 2, 4, 5, 4], m = 1, k = 3
// nums = [2, 6, 7, 3, 1, 7], m = 3, k = 4
console.log(maxSum(nums, m, k))