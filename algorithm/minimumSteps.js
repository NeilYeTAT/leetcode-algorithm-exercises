var minimumSteps = function (s) {
  let res = 0
  for (let i = 0, j = 0; i < s.length; i++) {
    if (s[i] === '0') {
      res += i - j
      j++
    }
  }
  return res
}
