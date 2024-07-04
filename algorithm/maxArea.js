// const maxArea = function (height) {
//   let left = 0, right = height.length - 1
//   let ans = 0
//   while (left <= right) {
//     ans = Math.max(ans, (right - left) * Math.min(height[left], height[right]))
//     if (height[left] <= height[right]) {
//       left++
//     } else {
//       right--
//     }
//   }
//   return ans
// }
// // const height = [1, 1]
// const height = [1,8,6,2,5,4,8,3,7]
// console.log(maxArea(height));

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let res = 0
  for (let l = 0, r = height.length - 1; l < r; ) {
    let width = r - l
    let area = 0
    if (height[l] >= height[r]) {
      area = width * height[r]
      r--
    } else {
      area = width * height[l]
      l++
    }

    res = Math.max(res, area)
  }
  return res
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(height))
