var addRungs = function (rungs, dist) {
  let ans = 0
  rungs.unshift(0)
  for (let i = 1; i < rungs.length; i++) {
    let diff = rungs[i] - rungs[i - 1] - dist
    if (diff > 0) {
      ans += Math.ceil(diff / dist)
    }
  }
  return ans
}
const rungs = [1, 3, 5, 10],
  dist = 2
console.log(addRungs(rungs, dist))
