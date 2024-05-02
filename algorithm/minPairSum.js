
const minPairSum = function (nums) {
  nums.sort((a, b) => a - b)
  let ans = 0
  let l = 0, r = nums.length - 1
  while(l < r) {
    ans = Math.max(ans, nums[l] + nums[r])
    l++
    r--
  }
  return ans
} 
const nums = [2, 3, 3, 5]
console.log(minPairSum(nums));