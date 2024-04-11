// 给你一个整数数组 nums 和一个整数 k ，请你返回子数组内所有元素的乘积严格小于 k 的连续子数组的数目。

// const numSubarrayProductLessThanK = function (nums, k) {
//   let count = 0
//   let sum = 1
//   for (let i = 0; i < nums.length; i++) {
//     sum = 1
//     for (let j = i; j <= nums.length; j++) {
//       sum *= nums[j]
//       if (sum < k) {
//         count++
//       } else if (sum >= k) {
//         break
//       }
//     }
//   }
//   return count
// }

// 暴力解法时间复杂度过高, 飙升到2000ms....滑动窗口
const numSubarrayProductLessThanK = function (nums, k) {
  let ret = 0;
  let prod = 1, i = 0;
  for (let j = 0; j < nums.length; j++) {
    prod *= nums[j];
    while (i <= j && prod >= k) {
      prod /= nums[i];
      i++;
    }
    ret += j - i + 1;
  }
  return ret;
};
const nums = [10, 5, 2, 6], k = 100
console.log(numSubarrayProductLessThanK(nums, k))