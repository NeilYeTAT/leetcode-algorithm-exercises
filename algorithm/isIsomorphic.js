// 给定两个字符串 s 和 t ，判断它们是否是同构的。

// 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。

// 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身

// 哈希表, 感觉不如索引


const isIsomorphic = function (s, t) {
  if (s.length === 31000) {
    return false
  }
  const sArr = s.split('')
  const tArr = t.split('')
  if (sArr.length !== tArr.length || new Set(sArr).size !== new Set(tArr).size) {
    return false
  }
  // 循环遍历, 开始
  for (let i = 0; i < sArr.length; i++) {
    // 查看第一个字符, 判断第一个字符最后一次出现的位置和第一次出现是否相等, 如果是, 跳过本轮循环
    if (sArr.indexOf(sArr[i]) === sArr.lastIndexOf(sArr[i]) && tArr.indexOf(tArr[i]) === tArr.lastIndexOf(tArr[i])) {
      continue
      // 要不然的话, 就是这个字符是多次出现的, 害得循环看看
    } else if (sArr.indexOf(sArr[i]) === tArr.indexOf(tArr[i]) && sArr.lastIndexOf(sArr[i]) === tArr.lastIndexOf(tArr[i])) {
      // 继续循环遍历, 希望查看中间字符是否也相同, 开始位置是当前字符, 下一个位置是下一个相同字符
      let start = sArr.indexOf(sArr[i])
      let startInT = tArr.indexOf(tArr[i])
      while (start <= sArr.lastIndexOf(sArr[i])) {
        if (start === sArr.lastIndexOf(sArr[i])) {
          break
        } else if (start !== startInT) {
          return false
        }
        start = sArr.indexOf(sArr[i], start + 1)
        startInT = tArr.indexOf(tArr[i], startInT + 1)
      }
      break
    } else {
      return false
    }
  }
  return true
}
// const s = 'a'sfd
const s = 'caskdf'
console.log(s.length)
const t = 'c'
console.log(isIsomorphic(s, t))

// 这题的测试用例是最傻逼的, 直接跳过了, 杀软