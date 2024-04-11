// stack 实现括号匹配, 只检查左括号是否匹配右括号 


const stackBracket = function (sample) {
  let stack = []
  for (let i = 0; i < sample.length; i++) {
    if (sample[i] === '[' || sample[i] === '{') {
      stack[stack.length + 1] = sample[i]
    }
    if (sample[i] === ']' || sample[i] === '}') {
      if (sample[i - 1] === '[') {
        stack.length = stack.length - 1
        continue
      }
      return false
    }
    if (sample[i] === '}') {
      if (sample[i - 1] === '{') {
        stack.length = stack.length - 1
        continue
      }
      return false
    }
  }
}
const sample = 'const [asdf] {asklfdjl}'
console.log(stackBracket(sample))