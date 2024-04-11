// 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。

// 普普通通的哈希表, 打败96的人, 但是废内存, 有点难受
const nums = [4, 3, 2, 7, 8, 2, 3, 1]
// const nums = [1, 1]
const findDisappearedNumbers = function (nums) {
  let result = []
  let hashMap = new Array(nums.length).fill(0)
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i] - 1] = 1
  }
  let key = 1
  let start = 0
  while (key) {
    if (hashMap.indexOf(0, start) !== -1) {
      result.push(hashMap.indexOf(0, start) + 1)
      start = hashMap.indexOf(0, start) + 1
      continue
    }
    key = 0
  }
  return result
}
findDisappearedNumbers(nums)
