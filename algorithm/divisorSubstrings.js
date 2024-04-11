/**
 * 一个整数 num 的 k 美丽值定义为 num 中符合以下条件的 子字符串 数目：
子字符串长度为 k 。
子字符串能整除 num 。
给你整数 num 和 k ，请你返回 num 的 k 美丽值。
允许有 前缀 0 。
0 不能整除任何值。
一个 子字符串 是一个字符串里的连续一段字符序列。
 */

const divisorSubstrings = function (num, k) {
  let str = num.toString()
  let result = 0
  let right = 0, left = 0
  let window = ''
  while (right < k) {
    window += str[right]
    right++
  }
  let arr = [...window]
  for (; right < str.length; right++) {
    if (num % (+window) === 0) {
      result += 1
    }
    arr[left] = 0
    arr.push(str[right])
    window = arr.join('')
    left++
  }
  if (num % (+window) === 0) {
    result++
  }
  return result
}
console.log(divisorSubstrings(240, 2))

const FAKEdivisorSubstrings = function (num, k) {
  let str = num.toString();
  let result = 0;
  for (let i = k; i <= str.length; i++) {
      let window = str.substring(i - k, i);
      if (num % parseInt(window) === 0) {
          result++;
      }
  }
  return result;
}