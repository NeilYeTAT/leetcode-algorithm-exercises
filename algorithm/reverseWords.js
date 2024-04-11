

// 给定一个字符串 s ，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

// 基本思路就是碰到空格不管, 碰到其他字符记录第一次下标, 记录碰到空格的下标, 开始循环
// 来个锁, 起始坐标
// const s = "Let's take LeetCode contest"
// 末尾加个空格方便遍历
const s = "Let's take LeetCode contest"
// const s = "  Mr Ding "
// console.log(s.split(''))
// console.log(s.split('').reverse())

// --------------------------------------------原来还能用栈来做, 逆天, 确实没想到
const reverseWords = function (s) {
  s += ' '
  let str = s.split('')
  let flag = 1
  let start = 0
  let end = 0
  for (let i = 0; i < str.length ; i++) {
    if (str[i] !== ' ' && flag === 1) {
      flag = 0
      // 开始下标确认
      start = i
    } else if (str[i] === ' ' && flag === 0) {
      // 末尾位置确认, 就是 i, 循环后解开锁
      end = i - 1
      while (start <= end) {
        [str[start], str[end]] = [str[end], str[start]]
        start++
        end--
      }
      flag = 1
    }
  }
  str.length = str.length - 1
  return (str.join(''))
  // console.log(str)
}
console.log(reverseWords(s))