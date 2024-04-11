// 给你一个整数数组 nums 和一个整数 k 。请你从 nums 中满足下述条件的全部子数组中找出最大子数组和：
// 子数组的长度是 k，且
// 子数组中的所有元素 各不相同 。
// 返回满足题面要求的最大子数组和。如果不存在子数组满足这些条件，返回 0 。
// 子数组 是数组中一段连续非空的元素序列。

const maximumSubarraySum = function (nums, k) {
  const hashMap = new Map()
  let left = 0
  let window = 0
  let result = 0
  for (let right = 0; right < nums.length; right++) {
    window += nums[right]
    hashMap.set(nums[right], hashMap.get(nums[right]) + 1 || 1)
    if (right - left + 1 > k) {
      window -= nums[left]
      hashMap.set(nums[left], hashMap.get(nums[left]) - 1)
      if (hashMap.get(nums[left]) === 0) {
        hashMap.delete(nums[left])
      }
      left++
    }

    if (right - left + 1 === k && hashMap.size === k) {
      result = Math.max(result, window)
    }
  }
  return result
}

const nums = [4, 4, 4], k = 3
// const nums = [1, 5, 4, 2, 9, 9, 9], k = 3
console.log(maximumSubarraySum(nums, k))