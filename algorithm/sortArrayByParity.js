// 给你一个整数数组 nums，将 nums 中的的所有偶数元素移动到数组的前面，后跟所有奇数元素。

// 返回满足此条件的 任一数组 作为答案。

const sortArrayByParity = function (nums) {
  if (nums.length === 1) {
    return nums
  }
  let slow = 0
  while (nums[slow] % 2 === 0) {
    if (slow === nums.length) {
      return nums
    }
    slow++
  }
  for (let fast = slow + 1; fast < nums.length; fast++) {
    if (nums[fast] % 2 === 0) {
      [nums[fast], nums[slow]] = [nums[slow], nums[fast]]
      slow++
      while (nums[slow] % 2 === 0) {
        if (slow === nums.length) {
          return nums
        }
        slow++
      }
    }
  }
  return nums
}
const nums = [0, 1, 2]
console.log(sortArrayByParity(nums))