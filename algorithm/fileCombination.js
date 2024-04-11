

const fileCombination = function (target) {
  let left = 0, right = 0, window = 0
  let table = new Array(Math.ceil(target / 2) + 1)
  for (let i = 0; i < Math.ceil(target / 2) + 1; i++) {
    table[i] = i + 1
  }
  let result = []
  while (right < table.length) {
    if (window < target) {
      window += table[right]
      right++
      continue
    } else if (window > target) {
      while (window > target) {
        window -= table[left]
        left++
      }
    } else {
      result.push(table.slice(left, right))
      window -= table[left]
      left++
    }
  }
  return result
}
console.log(fileCombination(93))
