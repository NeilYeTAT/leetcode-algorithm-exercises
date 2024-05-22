const zeroFilledSubarray = function (nums) {
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      let count = 0
      let r = i
      while(r < nums.length && nums[r] === 0) {
        count++
        r++
      }
      ans += count * (count + 1) / 2
      i = r
    }
  }
  return ans
}
