// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

// 全部求绝对值然后再排序..., 时间复杂度太高...
// 如果是负数, 则可以算一下绝对值? 负数平方后百分百会在0右边,
// 解构赋值交换元素
// 二分搜索法插入后面?

// -----------------------------------> 双指针比较, 一个指针插入

// let nums = [-4, -2, 0, 5, 9]
let nums = [-7, -3, 2, 3, 11]
// let nums = [-7, -3, 2, 3, 11]
// let nums = [-4, -1, 0, 3, 10]

const sortedSquares = function (nums) {
  let left = 0
  let right = nums.length - 1
  let newArr = []
  while (left < right) {
    if ((nums[left] ** 2) >= (nums[right] ** 2)) {
      newArr.unshift(nums[left] ** 2)
      left++
    }
    else if ((nums[left] ** 2) < (nums[right] ** 2)) {
      newArr.unshift(nums[right] ** 2)
      right--
    }
  }
  newArr.unshift(nums[left] ** 2)
  return newArr
}
console.log(sortedSquares(nums))

