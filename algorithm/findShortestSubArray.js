// 给定一个非空且只包含非负数的整数数组 nums，数组的 度 的定义是指数组里任一元素出现频数的最大值。

// 你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

const findShortestSubArray = function (nums) {
  let hashMap = new Array(50_000).fill(0)
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]]++
  }
  // 构建哈希表, 找到哈希表中最大值, 即出现次数最多的数, 可能不只一个
  let maxArr = []
  let maxValue = hashMap.indexOf(Math.max(...hashMap))
  while (maxValue !== -1) {
    maxArr.push(maxValue)
    maxValue = hashMap.indexOf(Math.max(...hashMap), maxValue + 1)
  }
  let minLen = Infinity
  for (let i = 0; i < maxArr.length; i++) {
    // let result = nums.lastIndexOf(maxArr[i]) - nums.indexOf(maxArr[i]) + 1
    minLen = minLen < nums.lastIndexOf(maxArr[i]) - nums.indexOf(maxArr[i]) + 1 ? minLen : nums.lastIndexOf(maxArr[i]) - nums.indexOf(maxArr[i]) + 1
  }
  return minLen
}

const nums = [1, 2, 2, 3, 1, 4, 2]
console.log(findShortestSubArray(nums))