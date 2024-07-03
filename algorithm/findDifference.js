/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const res = []
  let temp = []
  for (let item of nums1) {
    if (!nums2.includes(item) && !temp.includes(item)) {
      temp.push(item)
    }
  }
  res.push(temp)
  temp = []
  for (let item of nums2) {
    if (!nums1.includes(item) && !temp.includes(item)) {
      temp.push(item)
    }
  }
  res.push(temp)
  return res
}
