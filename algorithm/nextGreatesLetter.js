// 给你一个字符数组 letters，该数组按非递减顺序排序，以及一个字符 target。letters 里至少有两个不同的字符。
// 返回 letters 中大于 target 的最小的字符。如果不存在这样的字符，则返回 letters 的第一个字符。

// a 最小, z 最大

// 数组按大到小排列
// const nextGreatestLetter = function (letters, target) {
//   if (target > letters[0]) {
//     return letters[0]
//   }
//   // 去重
//   letters = [...new Set(letters)]
//   let left = 0
//   let right = letters.length - 1
//   let middle = parseInt((left + right) / 2)
//   // 大到小排序
//   while (left <= right) {
//     // left
//     if (letters[middle] === target) {
//       if (letters[middle + 1]) {
//         return [middle + 1]
//       }
//     } else if (letters[middle] > target) {
//       if(letters[middle - 1] <= target) {
//         return letters[middle]
//       } 
//       right = middle
//       middle = parseInt((left + right) / 2)
//     } else if (letters[middle] < target) {
//       if(letters[middle + 1] >= target) {
//         return letters[middle]
//       }
//       left = middle
//       middle = parseInt((left + right) / 2)
//     } else {
//       return letters[0]
//     }
//   }
// }

// let letters = ['c', 'f', 'j']
// console.log(nextGreatestLetter(letters, 'a'))
// ----------------------------果咩内, 今天太累了头晕, 用下遍历吧🥹

// 小到大排序
const nextGreatestLetter = function (letters, target) {
  if (letters[letters.length - 1] < target) {
    return letters[0]
  }
  // console.log('none')
  letters = [...new Set(letters)]

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] <= target && letters[i + 1] > target) {
      return letters[i + 1]
    }

  }
  return letters[0]
}
const letters = ['c', 'f', 'j']
// const letters = ['x', 'x', 'y', 'y']
console.log(nextGreatestLetter(letters, 'd'))
