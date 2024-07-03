
const wiggleSort = function(nums) {
  nums.sort((a, b) => a - b)
  for (let i = 0, j = 1; j < nums.length; i+= 2, j+=2) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  return nums
}

const nums = [5, 3, 1, 2, 3]
console.log(wiggleSort(nums));