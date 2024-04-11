// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。

// nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]
// const nums1 = [1, 2, 2, 1]
// const nums2 = [2, 2]
const nums1 = [4, 9, 5]
const nums2 = [9, 4, 9, 8, 4]

const intersect = function (nums1, nums2) {
  let map = []
  let arr = []

  for (let i = 0; i < nums1.length; i++) {
    // 多次出现给1
    if (map[nums1[i]]) {
      map[nums1[i]] += 1
      continue
    }
    // 只出现一次直接给0
    map[nums1[i]] = 1
  }

  // 少数说的算
  for (let j = 0; j < nums2.length; j++) {
    // 只要出现了0, 立马退出
    if (map[nums2[j]] >= 1) {
      arr.push(nums2[j])
      map[nums2[j]]--
    }// else if(map[nums2[j]] >= 2) {

    //   // arr.push(nums2[j])
    //   // map[nums2[j]]--
    // }
  }
  return arr
}
console.log(intersect(nums1, nums2))