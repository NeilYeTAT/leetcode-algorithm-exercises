// 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。


// 肥肠简单的一题, 我又想到了一个逆天解法
// 先求两个数组的和, 然后两个合起来, 数组的和 - 集合的和 = 重复数字的和...好吧, 好像不行...
const intersection = function(nums1, nums2) {
  let map = []
  let arr = []
  for(let i = 0; i < nums1.length; i++) {
    map[nums1[i]] = 1
  }
  for(let j = 0; j < nums2.length; j++) {
    if(map[nums2[j]] === 1) {
      arr.push(nums2[j])
    }
  }
  return [...new Set(arr)]
}
const nums1 = [1, 2, 2, 1]
const nums2 = [2, 2]
console.log(intersection(nums1, nums2))