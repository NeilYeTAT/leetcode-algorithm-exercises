// 给你两个整数数组 nums1 和 nums2 ，它们已经按非降序排序，请你返回两个数组的 最小公共整数 。如果两个数组 nums1 和 nums2 没有公共整数，请你返回 -1 。
// 如果一个整数在两个数组中都 至少出现一次 ，那么这个整数是数组 nums1 和 nums2 公共 的。

// 哈希表打败84的人, 试试双指针-----------------------------------------------
// const getCommon = function (nums1, nums2) {
//   let [longArr, shortArr] = nums1.length > nums2.length ? [nums1, nums2] : [nums2, nums1]
//   const hashMap = new Set(longArr)
//   for (let i = 0; i < shortArr.length; i++) {
//     if (hashMap.has(shortArr[i])) {
//       return shortArr[i]
//     }
//   }
//   return -1
// }
// 双指针打败了94的人, 牛比!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 双指针的速度是最快的!!!!!!!!!!!!!!!!!!!!!!!!----------------------------🥳
const getCommon = function (nums1, nums2) {
  let i = 0
  let j = 0
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) {
      j++
    } else if (nums1[i] < nums2[j]) {
      i++
    } else {
      return nums1[i]
    }
  }
  return -1
}

const nums1 = [1, 2, 3]
const nums2 = [2, 4]
console.log(getCommon(nums1, nums2))