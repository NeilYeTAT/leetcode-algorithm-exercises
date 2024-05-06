const maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b)
  let ans = 0
  for (let l = 0, r = nums.length - 1; l < r; ) {
    if (nums[l] + nums[r] === k) {
      ans++
      l++
      r--
    } else if (nums[l] + nums[r] > k) {
      r--
    } else if (nums[l] + nums[r] < k) {
      l++
    }
  }

  return ans
}
