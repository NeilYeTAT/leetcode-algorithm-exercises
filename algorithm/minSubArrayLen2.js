var minSubArrayLen = function (target, nums) {
  let res = Number.MAX_SAFE_INTEGER
  let sum = 0
  for (let l = 0, r = 0; r < nums.length; r++) {
    sum += nums[r]
    while (sum >= target) {
      sum -= nums[l]
      res = Math.min(res, r - l + 1)
      l++
    }
  }
  return res === Number.MAX_SAFE_INTEGER ? 0 : res
}
