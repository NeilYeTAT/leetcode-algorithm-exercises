

const combinationSum3 = function (k, n) {
  let result = []

  function backTracking(startIndex, path) {
    if (path.length === k) {
      if (path.reduce((acc, cur) => acc + cur) === n) {
        result.push([...path])
      }
      return
    }
    for (let i = startIndex; i <= 9 - (path.length - k) + 1; i++) {
      path.push(i)
      backTracking(i + 1, path)
      path.pop()
    }
  }
  backTracking(1, [])
  return result
}
console.log(combinationSum3(2, 18))