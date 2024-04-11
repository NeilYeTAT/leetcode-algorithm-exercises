// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

const isValid = function (s) {
  let arr = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      arr.push(s[i])
      console.log(arr)
    } else if (arr.length === 0 && (s[i] === ')' || s[i] === ']' || s[i] === '}')) {
      return false
    }
    else if ((s[i].charCodeAt() - 1 === arr[arr.length - 1].charCodeAt()) || (s[i].charCodeAt() - 2 === arr[arr.length - 1].charCodeAt())) {
      arr.pop()
    } else {
      return false
    }
  }
  return arr.length === 0
}
const s = ']]]]'
console.log(isValid(s))