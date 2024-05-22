const lastStoneWeight = function (stones) {
  stones.sort((a, b) => a - b)
  let len = stones.length
  while (len >= 2) {
    let i = stones.length - 1
    if (stones[i] - stones[i - 1] === 0) {
      stones.pop()
      stones.pop()
      len -= 2
      continue
    } else if (stones[i] - stones[i - 1] > 0) {
      let pre = stones.pop()
      let after = stones.pop()
      let temp = pre - after
      stones.push(temp)
      len--
      stones.sort((a, b) => a - b)
    }
  }
  if (len > 0) {
    return stones[0]
  } else {
    return 0
  }
}
// const stones = [2, 7, 4, 1, 1, 8]
// const  stones = [1, 1]
const stones = [1, 2, 3, 4, 5, 17]
console.log(lastStoneWeight(stones))
