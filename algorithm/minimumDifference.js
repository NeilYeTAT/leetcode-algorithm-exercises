// 

const nums = [87063, 61094, 44530, 21297, 95857, 93551, 9918]
const minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b)
  let ans = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < nums.length - k + 1; i++) {
    ans = Math.min(ans, nums[i + k - 1] - nums[i])
  }
  return ans
}
