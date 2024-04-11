// 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。


const missingNumber = function (nums) {
  const hashMap = {}
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = 1
  }
  for (let j = 0; j < nums.length; j++) {
    if (hashMap[j]) {
      continue
    } else {
      return j
    }
  }
  return nums.length
}
const nums = [2, 3, 4, 5, 6, 9, 1, 7, 0]
console.log(missingNumber(nums))