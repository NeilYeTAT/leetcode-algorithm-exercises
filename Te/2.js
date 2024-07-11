// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// // 不含相邻 1 和 0 的最长
// var validStrings = function(n) {
//   const res = []

//   for (let i = 0; i < Math.ceil(n / 2); i++) {
//     let arr = Array(n).fill(1)
//     console.log(arr)
//     for (let j = 0; j < n; j++) {
//       res.push()
//     }
//   }

//   return res
// };

// const  n = 3

// console.log(validStrings(n))

function generateValidStrings(n) {
  if (n === 0) return []
  if (n === 1) return ["0", "1"]
  let res = []
  function dfs(s) {
    if (s.length === n) {
      return res.push(s)
    }
    dfs(s + "1")
    if (s[s.length - 1] !== "0") {
      dfs(s + "0")
    }
  }
  dfs("0")
  dfs("1")
  return res
}
console.log(generateValidStrings(3)) // 输出所有长度为3的有效字符串
