// 给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串 。
// 在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。

const longestPalindrome = function (s) {
  const hashMap = new Array(123).fill(0)
  for (let i = 0; i < s.length; i++) {
    hashMap[s[i].charCodeAt()]++
  }
  const result = hashMap.filter(val => val > 0).sort((a, b) => b - a)
  if (result.length === 1) return result[0]
  let sum = 0
  let flag = 1
  for (let j = 0; j < result.length; j++) {
    if (result[j] % 2 === 0) {
      sum += result[j]
      continue
    }
    if (flag && result[j] % 2 !== 0) {
      sum += result[j]
      flag = 0
      continue
    }
    sum += result[j] - 1
  }
  return sum
}

const s = 'aaaaacczzz'
console.log(longestPalindrome(s))