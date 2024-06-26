// 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。
// 假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。
// 你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间

// const findDuplicate = function (nums) {
//   return (nums.reduce((acc, cur) => acc + cur) - ([...(new Set(nums))].reduce((acc, cur) => acc + cur))) / (nums.length - (new Set(nums).size))
// }

const findDuplicate = function (nums) {
  // fast 注意跳跃两步的写法
  let slow = nums[0], fast = nums[nums[0]]
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[nums[fast]]
  }
  fast = 0
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
  }
  return slow
}
console.log(findDuplicate([2, 2, 2, 2, 2]))