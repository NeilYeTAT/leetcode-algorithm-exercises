
// const trap = function (height) {
//   let left = []
//   let right = []
//   // left
//   for (let item of height) {
//     if (left.length !== 0 && left[left.length - 1] >= item) {
//       left.push(left[left.length - 1])
//     } else {
//       left.push(item)
//     }
//   }
//   // right
//   for (let i = height.length - 1; i >= 0; i--) {
//     if (right.length !== 0 && right[i + 1] >= height[i]) {
//       right[i] = right[i + 1]
//     } else {
//       right[i] = height[i]
//     }
//   }
//   let ans = 0
//   for (let i = 1; i < height.length - 1; i++) {
//     if (Math.min(left[i], right[i]) - height[i] > 0) {
//       ans += Math.min(left[i], right[i]) - height[i]
//     }
//   }
//   return ans
// }
const trap = function (height) {
  let left = 1, right = height.length - 2
  let lmax = height[0], rmax = height[height.length - 1]
  let ans = 0
  while (left <= right) {
    if (lmax <= rmax) {
      ans += Math.max(0, lmax - height[left])
      lmax = Math.max(height[left], lmax)
      left++
    } else {
      ans += Math.max(0, rmax - height[right])
      rmax = Math.max(height[right], rmax)
      right--
    }
  }
  return ans
}

// const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
const height = [4, 2, 0, 3, 2, 5]
console.log(trap(height));
