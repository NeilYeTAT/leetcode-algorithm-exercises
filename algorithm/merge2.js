const merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const ans = []
  let preV = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i]
    if (preV[1] >= cur[0]) {
      preV[1] = Math.max(cur[1], preV[1])
    } else {
      ans.push(preV)
      preV = cur
    }
  }
  ans.push(preV)
  return ans
}

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]

console.log(merge(intervals))
