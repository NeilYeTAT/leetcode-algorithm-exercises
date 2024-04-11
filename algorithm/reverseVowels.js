// 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。
// 元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现不止一次。

const reverseVowels = function (s) {
  let str = s.split('')
  const table = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  let left = 0
  let right = str.length - 1
  while (left < right) {
    if (table.has(str[left]) && table.has(str[right])) {
      [str[left], str[right]] = [str[right], str[left]]
      left++
      right--
      continue
    } else if (table.has(str[left]) && !table.has(str[right])) {
      right--
      continue
    } else if (table.has(str[right]) && !table.has(str[left])) {
      left++
      continue
    } else {
      left++
      right--
    }
  }
  return str.join('')
}

const s = 'leetcode'
console.log(reverseVowels(s))