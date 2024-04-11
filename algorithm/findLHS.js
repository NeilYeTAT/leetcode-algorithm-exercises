// 和谐数组是指一个数组里元素的最大值和最小值之间的差别 正好是 1 。
// 现在，给你一个整数数组 nums ，请你在所有可能的子序列中找到最长的和谐子序列的长度。
// 数组的子序列是一个由数组派生出来的序列，它可以通过删除一些元素或不删除元素、且不改变其余元素的顺序而得到。

// 最长, 排序先, 找到那两个值后再遍历

// const nums = [1, 2, 2, 1]
// const nums = [1, 1, 1, 1]
// const nums = [-1, -1, -1, -2, -3, -3]
const nums = [1, 3, 2, 2, 5, 2, 3, 7]
const findLHS = function (nums) {
  let sortArr = nums.sort((a, b) => a - b)
  let slow = 0
  let maxLen = 0
  let cacheLen = 0
  for (let fast = 1; fast < nums.length; fast++) {
    if (sortArr[fast] - sortArr[slow] === 0) {
      continue
    }
    if (sortArr[fast] - sortArr[slow] === 1) {
      cacheLen = fast - slow + 1
      continue
    }
    maxLen = maxLen > cacheLen ? maxLen : cacheLen
    while (sortArr[fast] - sortArr[slow] !== 1 && slow < fast) {
      slow++
    }
  }
  return maxLen > cacheLen ? maxLen : cacheLen
}
console.log(findLHS(nums))
