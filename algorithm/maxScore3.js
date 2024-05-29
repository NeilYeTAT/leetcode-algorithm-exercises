const maxScore = function (s) {
  let arr = s.split("")
  let rightVal = arr.filter(v => v === "1").length
  let ans = 0
  let leftVal = 0
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (item === "0") {
      leftVal++
    } else if (item === "1") {
      rightVal--
    }

    if (i === arr.length - 1 && item === "0") {
      leftVal--
    }
    ans = Math.max(ans, leftVal + rightVal)
  }

  return ans
}

// const s = "011101"
const s = "00"
console.log(maxScore(s))
