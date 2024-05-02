// 给定一个非负整数数组 nums，  nums 中一半整数是 奇数 ，一半整数是 偶数 。
// 对数组进行排序，以便当 nums[i] 为奇数时，i 也是 奇数 ；当 nums[i] 为偶数时， i 也是 偶数 。
// 你可以返回 任何满足上述条件的数组作为答案 。
// 双指针, 一个指不对位置上的奇数, 一个指不对位置上的偶数
// const sortArrayParity = function (nums) {
//   let even = null
//   let odd = null
//   let key = 1
//   let flag = 1
//   let i = 0
//   let start = 0
//   while (i < nums.length) {
//     // 该位置应该是偶数, 但不是
//     if (i % 2 === 0 && nums[i] % 2 !== 0 && key === 1) {
//       odd = i
//       key = 0
//       if (flag) {
//         start = i
//       }
//     } else if (i % 2 !== 0 && nums[i] % 2 === 0 && flag === 1) {
//       // 该位置应该是奇数, 但不是
//       even = i
//       flag = 0
//       if (key) {
//         start = i
//       }
//     }
//     if (odd !== null && even !== null) {
//       [nums[odd], nums[even]] = [nums[even], nums[odd]]
//       odd = null
//       even = null
//       key = 1
//       flag = 1
//       i = start
//       continue
//     }
//     i++
//   }
//   return nums
// }
// 反复上锁解锁, 不利用额外空间

// const sortArrayParity = function (nums) {
//   let even = 0, odd = 1
//   while (even < nums.length || odd < nums.length) {
//     if (nums[even] % 2 === 0) {
//       even += 2
//     }
//     if (nums[odd] % 2 !== 0) {
//       odd += 2
//     }

//     if (nums[even] % 2 !== 0 && nums[odd] % 2 === 0) {
//       [nums[even], nums[odd]] = [nums[odd], nums[even]]
//       even += 2
//       odd += 2
//     }
//   }
//   return nums
// }

const sortArrayParity = function (nums) {
  let even = 0, odd = 1
  let tail = nums.length - 1
  while (even < nums.length && odd < nums.length) {
    if (nums[tail] % 2 === 0) {
      [nums[even], nums[tail]] = [nums[tail], nums[even]]
      even += 2
    } else {
      [nums[odd], nums[tail]] = [nums[tail], nums[odd]]
      odd += 2
    }
  }
  return nums
}