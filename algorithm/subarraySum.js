// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
// 子数组是数组中元素的连续非空序列。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let preSum = 0
  const hashMap = new Map([[0, 1]])
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    preSum = preSum + nums[i]

    if (hashMap.has(preSum - k)) {
      res += hashMap.get(preSum - k)
    }

    if (hashMap.has(preSum)) {
      hashMap.set(preSum, hashMap.get(preSum) + 1)
    } else {
      hashMap.set(preSum, 1)
    }
  }
  return res
}
const nums = [1, 1, 1],
  k = 2
console.log(subarraySum(nums, k))
