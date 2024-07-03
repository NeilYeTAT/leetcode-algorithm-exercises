// // 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
// // 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
// // 排序, 没思路, 一点都没有
// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// // let strs = ['a', '']
// // let strs = ['c', 'c', 'c', '', '', 'a', 'b']
// // let strs = ["cab", "tin", "pew", "duh", "may", "ill", "buy", "bar", "max", "doc"]
// const groupAngrams = function (strs) {
//   const hashMap = {}
//   let charCodeSum = 0
//   let charCodePro = 1
//   let result = []
//   const fuck = strs.sort()
//   // const fuck = strs.sort((a, b) => a - b)
//   // console.log(fuck)
//   if (fuck[0] === '') {
//     result = [['']]
//     for (let i = 1; i < fuck.length; i++) {
//       if (fuck[i] !== '') {
//         break
//       }
//       result[0].push('')
//       console.log(result)
//     }
//   }
//   for (let i = 0; i < strs.length; i++) {
//     for (let j = 0; j < strs[i].length; j++) {
//       if (j < strs[i].length - 1) {
//         charCodeSum += strs[i][j].charCodeAt()
//         charCodePro *= strs[i][j].charCodeAt()
//         continue
//       }
//       let flag = 1
//       charCodeSum += strs[i][j].charCodeAt()
//       charCodePro *= strs[i][j].charCodeAt()
//       // console.log(charCodePro)
//       if (hashMap[charCodeSum] && hashMap[charCodePro]) {
//         hashMap[charCodeSum] += ` ${strs[i]}`
//       } else if (hashMap[charCodeSum] && !hashMap[charCodePro]) {
//         // hashMap[charCodeSum] = strs[i]
//         hashMap[charCodePro] = strs[i]
//       } else {
//         hashMap[charCodeSum] = strs[i]
//         hashMap[charCodePro] = strs[i]
//       }
//       if (flag) {
//         charCodeSum = 0
//         flag = 0
//       }
//     }
//   }
//   console.log(hashMap)
//   let will = Object.values(hashMap)
//   for (let i = 0; i < will.length; i++) {
//     result.push(will[i].split(' '))
//   }
//   console.log(...new Set(result))
//   return result
// }
// // groupAngrams(strs)
// console.log(groupAngrams(strs))
// console.log(strs.sort())
// let strs = ['a', '']
// let strs = ['c', 'c', 'c', '', '', 'a', 'b']
// let strs = ["cab", "tin", "pew", "duh", "may", "ill", "buy", "bar", "max", "doc"]

// const groupAngrams = function (strs) {
//   let fake = []
//   for (let item of strs) {
//     item = [...item].sort().join('')
//     fake.push(item)
//   }
//   console.log(fake)
//   let table = new Set(fake)
//   console.log(table)
//   // console.log(fake.sort())
//   console.log((strs))
//   let result = new Array(table.size)
//   console.log(result)

//   for (let [key, value] of table.entries()) {
//     console.log(value)
//   }
//   return result
// }

// var groupAnagrams1 = function (strs) {
//   const map = new Map();
//   for (let str of strs) {
//     let array = Array.from(str);
//     array.sort();
//     let key = array.toString();
//     console.log(key)
//     let list = map.get(key) ? map.get(key) : new Array();
//     list.push(str);
//     map.set(key, list);
//   }
//   console.log(map)
//   return Array.from(map.values());
// };
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

const groupAnagrams = function (strs) {
  const hashMap = new Map()
  for (let str of strs) {
    let arr = Array.from(str)
    arr.sort()
    let key = arr.toString()
    let list = hashMap.get(key) ? hashMap.get(key) : new Array()
    list.push(str)
    hashMap.set(key, list)
  }
  return Array.from(hashMap.values())
}

console.log(groupAnagrams(strs))
