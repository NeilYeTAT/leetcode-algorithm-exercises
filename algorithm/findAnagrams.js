// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

// 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

// const findAnagrams = function (s, p) {
//   if (p.length > s.length) {
//     return []
//   }

//   let hashMap = new Map()
//   for (let item of p) {
//     hashMap.set(item, (hashMap.get(item) || 0) + 1)
//   }

//   let start = null
//   let result = []
//   let key = 1
//   let fakeMap = new Map(hashMap)
//   let flag = 0
//   for (let i = 0; i < s.length; i++) {
//     if (key) {
//       fakeMap = new Map(hashMap)
//       start = i
//     }

//     if (fakeMap.has(s[i])) {
//       key = 0
//       if (fakeMap.get(s[i]) > 1) {
//         fakeMap.set(s[i], fakeMap.get(s[i]) - 1)
//       } else {
//         fakeMap.delete(s[i])
//         if (fakeMap.size === 0) {
//           flag = 1
//           result.push(start)
//           i = start
//           key = 1
//         }
//       }
//     }  else if (hashMap.has(s[i])  && !fakeMap.has(s[i])) {
//       flag = 1
//       i = start
//       key = 1
//     } else {
//       key = 1
//       if (flag) {
//         i = start
//         flag = 0
//       }
//     }
//   }
//   return result
// }
// // 滑动窗口, 不能使用哈希表
// // const findAnagrams = function (s, p) {
// //   if (s.length < p.length) {
// //     return []
// //   }
// //   let result = []

// //   return result
// // }

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (p.length > s.length) return []
  const map = new Map()
  let res = []
  for (let item of p) {
    map.set(item, (map.get(item) || 0) + 1)
  }
  let r = 0
  for (; r < p.length; r++) {
    if (map.has(s[r])) {
      map.set(s[r], map.get(s[r]) - 1)
    }
  }
  for (let l = 0; r <= s.length; r++, l++) {
    if ([...map.values()].every(v => v === 0)) {
      res.push(l)
    }
    if (map.has(s[l])) {
      map.set(s[l], map.get(s[l]) + 1)
    }
    if (map.has(s[r])) {
      map.set(s[r], map.get(s[r]) - 1)
    }
  }
  return res
}

const s = "abab"
const p = "ab"
// const s = "cbaebabacd"
// const p = 'abc'
console.log(findAnagrams(s, p))
