// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

// 两层for循环
// or 递归?
// 回溯
// 1, 2, 3
// 1 -> 1, 2, 3
// 2 -> 1, 2, 3
// 3 -> 1, 2, 3
const permute = function (nums) {
  function backtrack(list, temp, nums) {
    if (temp.length === nums.length) {
      return list.push([...temp])
    }
    for (let i = 0; i < nums.length; i++) {
      if (temp.includes(nums[i])) {
        continue
      }
      temp.push(nums[i])
      backtrack(list, temp, nums)
      temp.pop()
    }
  }
  let list = []
  backtrack(list, [], nums)
  return list
}

const nums = [1, 2, 3]
console.log(permute(nums))