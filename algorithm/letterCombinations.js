

const letterCombination = function (digits) {
  const table = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  let maxLen = digits.length
  if (maxLen === 0) return []
  if (maxLen === 1) return table[digits].split('')

  let result = []
  let path = []
  let tableIndex = 0
  function backTracking(path, tableIndex) {
    if (path.length === digits.length) {
      result.push(path.join(''))
      return
    }
    for (let i = 0; i < table[digits[tableIndex]].length; i++) {
      path.push(table[digits[tableIndex]][i])
      backTracking(path, tableIndex + 1)
      path.pop()
    }
  }
  backTracking(path, tableIndex)
  return result
}
console.log(letterCombination('22'))
console.log(letterCombination('23'))