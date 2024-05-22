const buildArray = function (target, n) {
  let index = 0,
    ans = []
  let flag = 0
  for (let i = 1; i <= n; i++) {
    if (target[index] === i) {
      index++
      ans.push("Push")
      flag++
    } else {
      ans.push("Push")
      ans.push("Pop")
    }
    if (flag === target.length) {
      break
    }
  }
  return ans
}
