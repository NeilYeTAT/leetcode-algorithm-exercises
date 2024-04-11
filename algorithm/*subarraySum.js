// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

// 子数组是数组中元素的连续非空序列。

// 遍历一遍, 依次shift头部


// const subarraySum = function (nums, k) {
// let result = 0
// let arr = []
// let sum = 0
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] === k) {
//     result += 1
//     sum += nums[i]
//     sum -= arr[0]
//     arr.shift()
//     continue
// }
//   sum += nums[i]
//   if (sum < k) {
//     arr.push(nums[i])
//   } else if (sum > k) {
//     sum -= arr[0]
//     arr.shift()
//   } else {
//     result += 1
//     sum -= arr[0]
//     arr.shift()
//   }
// }
// return result
// }
const subarraySum = function (nums, k) {
  let result = 0;
  let sum = 0;
  let map = new Map();
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (map.has(sum - k)) {
      result += map.get(sum - k);
    }

    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1);
    } else {
      map.set(sum, 1);
    }
  }
  return result;
}
console.log(subarraySum([1, 2, 3], 3))

