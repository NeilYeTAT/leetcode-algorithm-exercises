const answerQueries = function (nums, queries) {
  nums.sort((a, b) => a - b)
  let result = new Array(queries.length)
  for (let i = 0; i < queries.length; i++) {
    let left = 0, right = nums.length - 1
    let sum = 0
    let len = 0
    while (left <= right) {
      sum += nums[left]
      if (sum <= queries[i]) {
        len++
      }
      left++
    }
    result[i] = len
  }
  return result
}
const nums = [4, 5, 2, 1], queries = [3, 10, 21]
console.log(answerQueries(nums, queries))