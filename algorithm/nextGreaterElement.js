// 递减栈
const nextGreaterElement = function (nums1, nums2) {
  let result = new Array(nums1.length).fill(-1)
  let stack = []
  for (let i = 0; i < nums2.length; i++) {
    while (stack.length && nums2[stack[stack.length - 1]] < nums2[i]) {
      if (nums1.includes(nums2[stack[stack.length - 1]])) {
        let index = nums1.indexOf(nums2[stack[stack.length - 1]])
        result[index] = nums2[i]
      }
      stack.pop()
    }
    stack.push(i)
  }
  return result
}

const nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]
// const nums1 = [2, 4], nums2 = [1, 2, 3, 4]
console.log(nextGreaterElement(nums1, nums2))
