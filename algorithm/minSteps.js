
const minSteps = function(s, t) {
  const hashMap = new Map()
  for (let item of s) {
    hashMap.set(item, (hashMap.get(item) || 0) + 1)
  }
  let ans = 0

  for (let item of t) {
    if (hashMap.get(item) === undefined || hashMap.get(item) === 0) {
      ans++
    } else {
      hashMap.set(item, (hashMap.get(item) - 1))
    }
  }
  return ans
}

const s = "leetcode", t = "practice"
console.log(minSteps(s, t))