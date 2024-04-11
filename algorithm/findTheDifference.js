// 给定两个字符串 s 和 t ，它们只包含小写字母。
// 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
// 请找出在 t 中被添加的字母。
// 第一次看想到的是遍历一次, 使用ascii码来找答案

const s = ''
const t = 'a'
const findTheDifference = function (s, t) {
  let result = 0
  for (let i = 0; i < t.length; i++) {
    if (i !== s.length) {
      result = result + t[i].charCodeAt() - s[i].charCodeAt()
      continue
    }
    result = result + t[i].charCodeAt()
  }
  return String.fromCharCode(result)
}
console.log(findTheDifference(s, t))
// 如果将两个字符串拼接成一个字符串，则问题转换成求字符串中出现奇数次的字符。类似于「136. 只出现一次的数字」，我们使用位运算的技巧解决本题。