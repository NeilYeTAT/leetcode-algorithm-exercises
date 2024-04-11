// 给你字符串 s 和整数 k 。
// 请返回字符串 s 中长度为 k 的单个子字符串中可能包含的最大元音字母数。
//  英文中的 元音字母 为（a, e, i, o, u）。k

const maxVowels = function (s, k) {
  let table = new Set(['a', 'e', 'i', 'o', 'u'])
  let count = 0
  let left = 0, right = 0
  while (right < k) {
    table.has(s[right]) && count++
    right++
  }
  let result = count
  while (right < s.length) {
    table.has(s[right]) && count++
    table.has(s[left]) && count--
    left++
    right++
    result = Math.max(result, count)
  }
  return result
}
console.log(maxVowels('aeiou', 2))
