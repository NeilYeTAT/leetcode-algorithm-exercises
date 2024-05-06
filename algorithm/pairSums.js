

const pairSum = function(nums, target) {
  nums.sort((a, b) => a - b)
  let ans = []
  for(let l = 0, r = nums.length - 1; l < r; ) {
    if (nums[l] + nums[r] === target) {
      ans.push([nums[l], nums[r]])
      l++
      r--
    } else if (nums[l] + nums[r] > target) {
      r--
    } else if (nums[l] + nums[r] < target) {
      l++
    }
  }
  return ans
}
