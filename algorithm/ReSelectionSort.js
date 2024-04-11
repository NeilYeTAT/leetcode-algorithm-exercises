// 选择排序

const selectionSort = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i
    for (let j = i; j < nums.length; j++) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j
      }
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
  }
  console.log(nums)
}

const nums = [2, 4, 1, 5, 3]
selectionSort(nums)