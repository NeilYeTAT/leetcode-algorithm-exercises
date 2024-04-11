// 子数组的重复度和原数组的重复度相同的个数
// 何时移动左指针?
// 两个for循环嵌套暴力破解, 不如双指针
// const countCompleteSubarrays = function (nums) {
//   const benchmark = new Set(nums)
//   let count = 0
//   for (let i = 0; i < nums.length - benchmark.size; i++) {
//     const hashMap = new Set()
//     for (let j = i; j <= nums.length; j++) {
//       if (hashMap.size > benchmark.size) {
//         break
//       } else if (hashMap.size === benchmark.size) {
//         count++
//         hashMap.add(nums[j])
//       } else {
//         hashMap.add(nums[j])
//       }
//     }
//   }
//   return count
// }

const countCompleteSubarrays = function (nums) {
  const benchmark = new Set(nums)
  const hashMap = new Set()
  let count = 0, right = 0, left = 0
  while (left + benchmark.size > nums.length) {
    while (hashMap.size <= benchmark.size) {
      if (hashMap.size === benchmark.size) {
        count++
      }
      hashMap.add(nums[right])
      right++
    }
    if (right > left) {
      left++
    } else {
      right--
    }
  }
  return count
}
// const nums = [5, 5, 5, 5]
const nums = [1, 3, 1, 2, 2]
console.log(countCompleteSubarrays(nums))