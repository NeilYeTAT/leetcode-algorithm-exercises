


// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 解释：需要合并 [1,2,3] 和 [2,5,6] 。
// 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。

// const nums1 = [0]
// const nums2 = [1]
// const merge = function (nums1, m, nums2, n) {
//   // for循环遍历有哪些值要被插入
//   let trueLong = m
//   for (let i = 0; i < nums2.length; i++) {
//     for (let j = 0; j < nums1.length; j++) {
//       if (nums2[i] < nums1[j]) {
//         for (let k = nums1.length - 1; k >= j; k--) {
//           nums1[k] = nums1[k - 1]
//         }
//         nums1[j] = nums2[i]
//         trueLong++
//         break
//       }
//       if (nums2[i] > nums1[trueLong - 1] && nums1[trueLong - 1] !== 0) {
//         nums1[trueLong] = nums2[i]
//         trueLong++
//         break
//       }
//     }
//   }
//   if (trueLong === 0) {
//     nums1 = [...nums2]
//   }
//   // console.log(nums1)
// }
// 马勒戈壁的, leetcode上死活通过不了, 操你妈的, 老子写对了的
// merge(nums1, 0, nums2, 1)
// merge(nums1, 0, nums2, 1)
// ----------------------------------------------------------------
// const nums1 = [1, 2, 3, 0, 0, 0] // m = 3
// / const nums1 = [0]
// const nums2 = [2, 5, 6] // n = 3

const merge = function(nums1, m, nums2, n) {
  for(let i = 0; i < nums2.length; i++) {
    nums1[i + m] = nums2[i]
  }
  nums1.sort((a, b) => a -b)
}
// merge(nums1, 3, nums2, 3)
merge(nums1, 0, nums2, 1)