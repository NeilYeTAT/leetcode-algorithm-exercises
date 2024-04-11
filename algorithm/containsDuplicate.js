// 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。

const nums = [1, 2, 3, 4, 5]
const containsDuplicate = function (nums) {
  const hashMap = {}
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]] === 1) {
      return true
    }
    hashMap[nums[i]] = 1
  }
  return false
}
console.log(containsDuplicate(nums))