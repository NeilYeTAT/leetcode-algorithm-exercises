const letterCasePermutation = function (s) {
  const ans = []
  ans.push(s)
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() - 0 >= 65 && s[i].charCodeAt() - 0 <= 90) {
      ans.push(s.toLowerCase(i, i + 1))
    } else if (s[i].charCodeAt() - 0 >= 97 && s[i].charCodeAt() - 0 <= 122) {
      ans.push(s.toUpperCase(i, i + 1))
      console.log(s.toUpperCase(i, i + 1))
    }
  }

  return ans
}

const s = "a1b2"
console.log(letterCasePermutation(s))
