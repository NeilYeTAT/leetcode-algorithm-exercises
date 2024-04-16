
const subsets = function (nums) {
  let result = []
  let path = []
  result.push([])
  function backTracking(startIndex, path) {
    if (startIndex === nums.length) {
      return
    }
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i])
      result.push([...path])
    }
    backTracking(startIndex + 1, [])
  }
  backTracking(0, path)
  return result
}
const nums = [1, 2, 3]
console.log(subsets(nums));