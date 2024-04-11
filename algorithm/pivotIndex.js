// 双指针找两边和相等的位置
// 数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。
// 如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。
// 如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。
// 双指针不行, 这他妈是数学题

const pivotIndex = function (nums) {
  let sum = nums.reduce((cur, acc) => cur + acc, 0)
  let leftSum = 0
  for (let i = 0; i < nums.length; i++) {
    if (leftSum * 2 + nums[i] === sum) {
      return i
    }
    leftSum += nums[i]
  }
  return -1
}
console.log(pivotIndex([-1, -1, -1, 0, 1, 1]))