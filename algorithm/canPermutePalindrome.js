

const canPermutePalindrome = function (s) {
  const hashMap = new Map()
  for (let item of s) {
    hashMap.set(item, (hashMap.get(item) || 0) + 1)
  }
  let flag = 1
  for (let [key, value] of hashMap.entries()) {
    if (flag && value % 2 !== 0) {
      flag = 0
      continue
    }
    if (value % 2 !== 0) {
      return false
    }
  }
  return true
}