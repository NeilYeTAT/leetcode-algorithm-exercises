const vowelStrings = function (words, left, right) {
  const table = new Set(["a", "e", "i", "o", "u"])
  let ans = 0

  for (; left <= right; left++) {
    if (
      table.has(words[left][0]) &&
      table.has(words[left][words[left].length - 1])
    ) {
      ans++
    }
  }
  return ans
}

const words = ["are", "amy", "u"],
  left = 0,
  right = 2
console.log(vowelStrings(words, left, right))
