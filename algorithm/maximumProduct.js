// // 给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积
// // 先排序先...
// // 最复杂情况, [-9, -8, -3, 7, 8]
// const maximumProduct = function (nums) {
//   if (nums.length === 3) {
//     return nums[0] * nums[1] * nums[2]
//   }
//   let arr = nums.sort((a, b) => a - b)
//   // console.log(arr)
//   if (arr[0] >= 0 || (arr[0] < 0 && arr[1] > 0) || nums.at(-1) < 0) {
//     return arr.at(-1) * arr.at(-2) * arr.at(-3)
//   }
//   // 最大数一定在两边边界
//   let left = 0
//   let right = arr.length - 1
//   if (arr.at(-3) <= 0) {
//     return arr[left] * arr[left + 1] * arr[right]
//   }
//   if (arr[left] * arr[left + 1] > arr[right] * arr[right - 1]) {
//     return arr[left] * arr[left + 1] * arr[right]
//   }
//   return arr[right] * arr[right - 1] * arr[right - 2]
//   // if (Math.abs(arr[left]) > arr[right]) {
//   //   // 俩负数大于右边正数
//   //   if (Math.abs(arr[left] * arr[left + 1] > arr[right] * arr[right - 1])) {
//   //     return arr[left] * arr[left + 1] * arr[right]
//   //   }
//   //   // 不如右边的
//   //   return arr[right] * arr[right - 1] * arr[right - 2]
//   // }
// }
// // const nums = [-9, -8, -3, 7, 8]
// const nums = [-1, -5, 0, 0, 3, 4]
// console.log(maximumProduct(nums));
// // maximumproduct(nums)

const maximumProduct = function (nums) {
  if (nums.length === 3) {
    return nums[0] * nums[1] * nums[2]
  }
  let arr = nums.sort((a, b) => a - b)
  return arr[0] * arr[1] * arr[arr.length - 1] > arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3] ? arr[0] * arr[1] * arr[arr.length - 1] : arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3]
  // 左边俩相乘再最右
  // if(arr[0] * arr[1] * arr[arr.length - 1] > arr[arr.length - 1] *  arr[arr.length - 2] *  arr[arr.length - 3]){
  // }
}
// const nums = [-1, -5, 0, 0, 3, 4]
const nums = [1, 2, 3, 4]
console.log(maximumProduct(nums))


// --------------------------------------------------------------
//  纯纯找规律的题目有, 妈的