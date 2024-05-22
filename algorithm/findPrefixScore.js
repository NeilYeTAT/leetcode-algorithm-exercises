

const findPrefixScore = function(nums) {
  const ans = new Array(nums.length)
  let maxVal = Number.MIN_SAFE_INTEGER
  let preSum = Array(nums.length + 1)
  preSum[0] = 0

  for(let i = 0; i < nums.length; i++) {
    maxVal = Math.max(nums[i], maxVal)
    ans[i] = maxVal + nums[i]
    preSum[i + 1] = preSum[i] + ans[i]
  }
  preSum.shift()
  return preSum
}

const nums = [2, 3, 7, 5, 10]
console.log(findPrefixScore(nums))