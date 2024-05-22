

const maximumLengthSubstring = function(s) {
  let ans = 0
  let l = 0
  const hashMap = new Map()
  for (let i = 0; i < s.length; i++ ) {
    hashMap.set(s[i], (hashMap.get(s[i]) || 0) + 1)
    while (hashMap.get(s[i]) > 2) {
      hashMap.set(s[l], hashMap.get(s[l]) - 1)
      l++
    }
    ans = Math.max(ans, i - l + 1)
  }

  return ans
}