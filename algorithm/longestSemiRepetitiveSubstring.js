const longestSemiRepetitiveSubstring = function (s) {
  let same = 0
  let ans = 1
  let left = 0

  for (let right = 1; right < s.length; right++) {
    if (s[right] === s[right - 1] && ++same > 1) {
      for (left ++;s[left] !== s[left - 1]; left++);
      same = 1
    }
    ans = Math.max(ans, right - left + 1)
  }

  return ans
}
// const s = "52233"
// const s = "011"
const s = "11111111111"
// const s = "5494"
console.log(longestSemiRepetitiveSubstring(s))
