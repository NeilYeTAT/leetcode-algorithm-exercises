
const findValueOfPartition = function(nums) {
  nums.sort((a, b) => a - b)
  let ans = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < nums.length - 1; i++) {
    ans = Math.min(nums[i + 1] - nums[i], ans)
  }
  return ans
}

const nums = [1, 3, 2, 4]
console.log(findValueOfPartition(nums))