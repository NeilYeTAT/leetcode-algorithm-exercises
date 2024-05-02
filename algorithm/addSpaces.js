// 暴力破解超时

// const addSpaces = function(s, spaces) {
//   let count = 0
//   let arr = s.split('')
//   for (let item of spaces) {
//     arr.splice(item + count, 0, ' ')
//     count++
//   }
//   return arr.join('')
// }

const addSpaces = function (s, spaces) {
  let res = [], left = 0
  for (let space of spaces) {
    res.push(s.substring(left, space))
    left = space
  }
  return res.join(' ')
}
const s = "LeetcodeHelpsMeLearn",
  spaces = [8, 13, 15]
console.log(addSpaces(s, spaces))
