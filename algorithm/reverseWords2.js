// 基本思路, 去除空格后压入栈, 入栈, 手动添加单词间空格

// const s = 'hello, world'
const s = ' hello, world   '
// const s = '   the sky is   blue   '
// console.log(s.substring(3, s.length))
// console.log(s.split(' '))


const reverseWords = function (s) {
  let str = s.split(' ')
  // let right = str.length - 1
  while (str[str.length - 1] === '') {
    str.pop()
    // right--
  }
  while (str[0] === '') {
    str.shift()
  }
  // 去除中间空格
  let arr = []
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== '') {
      arr.push(str[i])
    }
  }
  return arr.join(' ')
}

reverseWords(s)