const maxScore = function (nums) {
  nums.sort((a, b) => b - a)
  let preSum = Array(nums.length + 1)
  preSum[0] = 0
  for (let i = 0; i < nums.length; i++) {
    preSum[i + 1] = preSum[i] + nums[i]
  }
  return preSum.filter(n => n > 0).length
}

const nums = [2,-1,0,1,-3,3,-3]
console.log(maxScore(nums))