const subarraysDivByK = function (nums, k) {
  let ans = 0
  const hashMap = new Map()
  hashMap.set(0, 1)
  let preSum = 0
  for (let item of nums) {
    preSum += item
    if (hashMap.has((preSum % k + k) % k)) {
      ans += hashMap.get((preSum % k + k) % k)
    }
    hashMap.set((preSum % k + k) % k, (hashMap.get((preSum % k + k) % k) || 0) + 1)
  }
  return ans
}
