

const maxSubarrayLength = function(nums, k) {
  let ans = 0
  const hashMap = new Map()
  let left = 0

  for (let i = 0; i < nums.length; i++) {
    hashMap.set(nums[i], (hashMap.get(nums[i]) || 0) + 1)
    while(hashMap.get(nums[i]) > k) {
      hashMap.set(nums[left], hashMap.get(nums[left]) - 1)
      left++
    }
    ans = Math.max(ans, i - left + 1)
  }

  return ans
}

const nums = [1, 2, 3, 1, 2,3, 1, 2], k = 2
console.log(maxSubarrayLength(nums, k));