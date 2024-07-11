/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const preProduct = Array(nums.length + 1).fill(1)
  const backProduct = Array(nums.length + 1).fill(1)
  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    preProduct[i + 1] = preProduct[i] * nums[i]
    backProduct[j] = backProduct[j + 1] * nums[j]
  }
  const res = []
  for (let k = 0; k < nums.length; k++) {
    res.push(backProduct[k + 1] * preProduct[k])
  }
  return res
}

const nums = [1, 2, 3, 4]
console.log(productExceptSelf(nums))
