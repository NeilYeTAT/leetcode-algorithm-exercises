const firstMissPositive = function (nums) {
  let l = 0, r = nums.length
  while (l < r) {
    if (l + 1 === nums[l]) {
      l++
    } else if (nums[l] <= l || nums[l] > r || nums[nums[l] - 1] === nums[l]) {
      r--
      [nums[l], nums[r]] = [nums[r], nums[l]]
    } else {
      // [nums[l], nums[nums[l] - 1]] = [nums[nums[l] - 1], nums[l]];
      let target = nums[l] - 1;
      [nums[l], nums[target]] = [nums[target], nums[l]]
    }
  }
  return l + 1
}
const nums = [2, 1]
// const nums = [1, 2, 0]
// const nums = [4, 5, 6, 9]
console.log(firstMissPositive(nums));
// [nums[l], nums[nums[l] - 1]] = [nums[nums[l] - 1], nums[l]]
// if (nums[target] !== nums[l]) {
//   [nums[l], nums[target]] = [nums[target], nums[l]]
// } else {
//   [nums[l], nums[nums[l] - 1]] = [nums[nums[l] - 1], nums[l]];
//   r--
// }