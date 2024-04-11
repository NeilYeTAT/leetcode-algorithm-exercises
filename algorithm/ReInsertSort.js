// 插入排序, 有二分搜索那味了...

const insertSort = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    let pointer = i
    while (nums[pointer] < nums[pointer - 1]) {
      [nums[pointer], nums[pointer - 1]] = [nums[pointer - 1], nums[pointer]]
      pointer--
    }
  }
  console.log(nums)
}
// const nums = [8, 4, 2, 3, 1]
const nums = [4, 2, 7, 1, 3]
insertSort(nums)