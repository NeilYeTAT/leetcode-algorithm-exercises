// 如果左边是W, count - 1
// 如果右边是W, count + 1
const minimumRecolors = function (blocks, k) {
  let left = 0, right = 0
  let result = 0
  while (right < k) {
    if (blocks[right] === 'W') {
      result++
    }
    right++
  }
  if (result === 0) {
    return 0
  }
  let count = result
  for (; right < blocks.length; left++, right++) {
    blocks[right] === 'W' && count++
    blocks[left] === 'W' && count--
    result = Math.min(result, count)
  }
  return result
}
const blocks = "BWBBWWBBBWBWWWBWWBBWBWBBWBB", k = 11
// const blocks = "WBBWWBBWBW", k = 7
// const blocks = "WBWBBBW", k = 2
// const blocks = "BBWW", k = 1
console.log(minimumRecolors(blocks, k));