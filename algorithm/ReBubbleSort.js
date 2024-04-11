// 冒泡排序

// 两层for循环遍历, 第一层是排序次数, 第二层才是交换
// 小的去左边, 大的去右边
const bubbleSort = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    // let max = nums[i]
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }
  console.log(nums)
}
const nums = [2, 4, 1, 5, 9, 11, 2, 3, 1, 0, -1, 2000]
bubbleSort(nums)
