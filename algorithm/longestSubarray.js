// 删除一个元素后全是1 的最长数组
// 说白了, 就是只能包含一个0 的最长数组

const longestSubarray = function (nums) {
  const hashMap = new Map()
  let i = 0
  let result = 0
  for (let j = 0; j < nums.length; j++) {
    // if (nums[j] === 0) {
    //   i = Math.max(i, hashMap.get(0) + 1 || 0)
    //   hashMap.set(0, j)
    // }
    if (nums[j] === 0) {
      if (hashMap.has(0)) {
        i = hashMap.get(0) + 1
        hashMap.set(0, j)
      } else {
        hashMap.set(0, j)
      }
    }
    result = Math.max(result, j - i + 1)
  }
  return result - 1
}

const nums = [0, 0, 0, 1]
console.log(longestSubarray(nums));