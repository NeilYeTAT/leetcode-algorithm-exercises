const waysToSplitArray = function (nums) {
  let ans = 0
  const preSum = Array(nums.length + 1).fill(0)
  const backSum = Array(nums.length + 1).fill(0)
  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    preSum[i + 1] = preSum[i] + nums[i]
    backSum[j] = backSum[j + 1] + nums[j]
  }
  for (let i = 1; i < preSum.length - 1; i++) {
    if (preSum[i] >= backSum[i]) {
      ans++
    }
  }
  return ans
}

// const nums = [10, 4, -8, 7]
// const nums = [5, 4]
const nums = [0, 0]
console.log(waysToSplitArray(nums))
