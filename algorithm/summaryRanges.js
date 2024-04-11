// 给定一个  无重复元素 的 有序 整数数组 nums 。

// 返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表 。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。

// 列表中的每个区间范围 [a,b] 应该按如下格式输出：

// "a->b" ，如果 a != b
// "a" ，如果 a == b

const summaryRanges = function (nums) {
  nums.sort((a, b) => a - b)
  let result = []
  let start = 0
  let i = 0
  let key = 1
  while (i < nums.length) {
    result[start] = `${nums[i]}->`
    let temp = null
    while (key) {
      let pre = nums[i]
      i++
      if (pre + 1 === nums[i]) {
        temp = nums[i]
      } else {
        key = 0
        if (temp !== null) {
          result[start] = result[start] + `${temp}`
        } else {
          result[start] = `${nums[i - 1]}`
        }
      }
    }
    start++
    key = 1
  }
  return result
}
summaryRanges([0, 1, 2, 3, 5, -1, -3])
// ------------------------哈希表

