// 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
// 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
// 必须在不使用库内置的 sort 函数的情况下解决这个问题。
// 0,  1, 2排序
// 无脑0往左边, 2 往右边, 记住消耗的1的数量
// const sortColor = function (nums) {
//   let num0 = 0, num1 = 0, num2 = 0
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       nums[num2++] = 2
//       nums[num1++] = 1
//       nums[num0++] = 0
//     } else if (nums[i] == 1) {
//       nums[num2++] = 2
//       nums[num1++] = 1
//     } else {
//       nums[num2++] = 2
//     }
//   }
//   return nums
// }
const sortColor = function (nums) {
  const hashMap = new Map()
  for (let item of nums) {
    hashMap.set(item, (hashMap.get(item) || 0) + 1)
  }
  let count = 0
  while (count < nums.length) {
    if (hashMap.get(0) > 0) {
      nums[count] = 0
      hashMap.set(0, hashMap.get(0) - 1)
    } else if (hashMap.get(1) > 0) {
      nums[count] = 1
      hashMap.set(1, hashMap.get(1) - 1)
    } else if (hashMap.get(2) > 0) {
      nums[count] = 2
      hashMap.set(2, hashMap.get(2) - 1)
    }
    count++
  }
  return nums
}
const nums = [2, 0, 2, 1, 0, 1, 2, 2, 0, 1, ]
console.log(sortColor(nums))