// 

const fourSumCount = function (nums1, nums2, nums3, nums4) {
  const hashMap = new Map()
  let count = 0
  for (let n1 of nums1) {
    for (let n2 of nums2) {
      hashMap.set(n1 + n2, (hashMap.get(n1 + n2) || 0) + 1)
    }
  }
  for (let n3 of nums3) {
    for (let n4 of nums4) {
      let sum = n3 + n4
      count += (hashMap.get(0 - sum) || 0)
    }
  }
  return count
}
