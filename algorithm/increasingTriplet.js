// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var increasingTriplet = function (nums) {
//   if (nums.length < 3) {
//     return false
//   }
//   let pre = nums[0]
//   let count = 0
//   for (let item of nums) {
//     if (pre >= item) {
//       // count = 1
//     } else {
//       count++
//       pre = Math.min(pre, item)
//     }
//     if (count >= 3) {
//       return true
//     }
//   }
//   return count >= 3
// }

// var increasingTriplet = function (nums) {
//   if (nums.length < 3) {
//     return false
//   }
//   let count = 0
//   for (let i = 0; i < nums.length - 2; i++) {
//     count = 1
//     for (let j = i; j < nums.length; j++) {
//       if (nums[i] < nums[j]) {
//         count++
//         if (count >= 3) return true
//       }
//     }
//     if (count >= 3) return true
//   }
//   return count >= 3
// }

// // const nums = [1, 2, 3, 4, 5]
// // const nums = [5, 4, 3, 2, 1]
// // const nums = [20, 100, 10, 1canPlaceFlowers2, 5, 13]
// const nums = [0, 4, 2, 1, 0, -1, -3]
// console.log(increasingTriplet(nums))

var increasingTriplet = function (nums) {
  if (nums.length < 3) {
    return false
  }
  let first = nums[0],
    second = Number.MAX_VALUE
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > second) {
      return true
    } else if (nums[i] > first) {
      second = nums[i]
    } else {
      first = nums[i]
    }
  }
  return false
}
