const printVertically = function (s) {
  const arr = s.split(" ")
  const ans = []
  for (let i = 0; i < s.length; i++) {
    let temp = ""
    for (let item of arr) {
      if (item[i]) {
        temp += item[i]
      } else {
        temp += " "
      }
    }
    if (temp.trim().length === 0) {
      break
    }
    ans.push(temp.trimEnd())
  }
  return ans
}
const s = "HOW AREF YOU"
console.log(printVertically(s))
