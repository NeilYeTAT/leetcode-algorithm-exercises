// 4, 2
// 1, 2, 3, 4
// n === 数值范围, k === 结果限制个数
const combin = function (n, k) {
  let result = []
  function backTracking(startIndex, path) {
    if (path.length === k) {
      result.push([...path])
      return
    }
    for (let i = startIndex; i <= n; i++) {
      path.push(i)
      backTracking(i + 1, path)
      path.pop()
    }
  }
  backTracking(1, [])
  return result
}
console.log(combin(4, 2))