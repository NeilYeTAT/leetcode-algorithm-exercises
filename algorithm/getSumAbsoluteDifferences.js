const getSumAbsoluteDifferences = function (nums) {
  let preSum = Array(nums.length + 1).fill(0)
  let backSum = Array(nums.length + 1).fill(0)
  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    preSum[i + 1] = nums[i] + preSum[i]
    backSum[j] = nums[j] + backSum[j + 1]
  }
  const n = nums.length
  let result = Array(nums.length)
  for (let i = 0, j = backSum.length - 1; i < n; i++, j--) {
    let leftSum = nums[i] * i - preSum[i];
    let rightSum = backSum[i + 1] - nums[i] * (n - 1 - i);
    result[i] = leftSum + rightSum;
  }

  return result
}

const nums = [2, 3, 5]
console.log(getSumAbsoluteDifferences(nums))
