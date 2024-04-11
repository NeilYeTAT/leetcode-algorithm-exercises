// 非严格递增, 双指针

// let nums = [1, 2, 2, 3, 3, 4, 8, 8, 8, 9]
// nums = [1, 1, 3, 4, 5, 5,]
let nums = [1, 1, 2]

const removeDuplicates = function (nums) {
  let slow = 0
  let count = 0
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[slow] === nums[fast]) {
      nums[slow] = nums[fast]
      count++
    } else {
      slow++
      nums[slow] = nums[fast]
    }
  }
  nums.length = nums.length - count
  return nums.length
}
console.log(removeDuplicates(nums))
// removeDuplicates(nums)