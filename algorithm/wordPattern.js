// 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。
// 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。

// 关键在于顺序的表示, 顺序,,,,好想用顺序表啊, 草, 这他们不就是数组吗


// const wordPattern = function (pattern, s) {
//   // const compare = strArr.map(ele => ele[0])
//   // console.log(compare)
//   // if (new Set(pattern).size === new Set(compare).size) {
//   //   return true
//   // }
//   const strArr = s.split(' ')
//   console.log(strArr)
//   const patternArr = pattern.split('')
//   console.log(patternArr)
// if (compare.length === 1 && strArr.length === 1) {
//   return true
// }
// console.log(patternArr)
// console.log(compare)
// for (let i = 0; i < patternArr.length - 1; i++) {
// if (patternArr[i] === patternArr[i + 1] && compare[i] === compare[i + 1]) {
//   continue
// }
// else if (patternArr[i] !== patternArr[i + 1] && compare[i] !== compare[i + 1]) {
//   continue
// } else {
//   return false
// }
// 换个思路, 使用下标找, 和今早做的一个题目非常像
// let startInPattern = patternArr.indexOf(patternArr[i])
// let endInPattern = patternArr.lastIndexOf(patternArr[i])
// let startInCompare = compare.indexOf(compare[i])
// let endInCompare = compare.lastIndexOf(compare[i])
// ---------------------------------------------------眼睛要瞎了
// console.log(startInPattern, endInPattern)
// console.log(startInCompare, endInCompare)
//     if (startInPattern === endInPattern && startInCompare === endInCompare) {
//       continue
//     } else if (startInPattern === startInCompare && endInPattern === endInCompare) {
//       // 开始下标往前移动, 防止中间害有值
//       let nextInPattern = patternArr.indexOf(patternArr[i], startInPattern + 1)
//       // console.log(nextInPattern)
//       let nextInCompare = compare.indexOf(compare[i], startInCompare + 1)
//       // 何适循环? 当还没有到达终点相同下标时, 就循环, 还要判断
// while (nextInCompare === endInCompare && nextInPattern === endInPattern) {
//   if (nextInCompare === endInPattern && nextInPattern === endInCompare) {
//     break
//   }
//         if (nextInCompare === nextInPattern) {
//           nextInPattern = patternArr.indexOf(nextInPattern[i], nextInPattern + 1)
//           nextInCompare = compare.indexOf(nextInCompare[i], nextInCompare + 1)
//           continue
//         }
//         return false
//       }
//     } else {
//       return false
//     }
//   }
//   return true
// }
// console.log(wordPattern(pattern, s))
// 麻了隔壁的, 老子写了一下午, 结果看错题了, 重新写, 重新开始, fuck, LeetCode
// 好在大体逻辑上是对的, 其实是我把问题想复杂了

const pattern = 'apstndp'
const s = 'all people seem to need data processing'
const wordPattern = function (pattern, s) {
  const strArr = s.split(' ')
  // console.log(strArr)
  if (pattern.length === 1 && strArr.length === 1) {
    return true
  }
  const patternArr = pattern.split('')
  console.log(patternArr)
  console.log(strArr)
  if (pattern.length !== strArr.length) {
    return false
  }
  // console.log(strArr.lastIndexOf(strArr[1]))
  for (let i = 0; i < strArr.length; i++) {
    // 只有这一个元素, 跳过本轮循环, 看下一个元素
    if (patternArr.indexOf(patternArr[i]) === patternArr.lastIndexOf(patternArr[i]) && strArr.indexOf(strArr[i]) === strArr.lastIndexOf(strArr[i])) {
      continue
      // 下标相同, 继续比较, next出场
    } else if (patternArr.indexOf(patternArr[i]) === strArr.indexOf(strArr[i]) && patternArr.lastIndexOf(patternArr[i]) === strArr.lastIndexOf(strArr[i])) {
      // 循环继续查看
      let startInPattern = patternArr.indexOf(patternArr[i])
      let startInArr = strArr.indexOf(strArr[i])
      console.log(startInPattern, startInArr)
      // while (startInArr !== strArr.lastIndexOf(strArr[i]) && startInPattern !== patternArr.lastIndexOf(patternArr[i])) 
      while (startInArr === startInPattern) {
        if (startInArr === strArr.lastIndexOf(strArr[i])) {
          break
        }
        if (startInArr !== startInPattern) {
          return false
        }
        startInArr = patternArr.indexOf(patternArr[i], startInArr + 1)
        startInPattern = strArr.indexOf(strArr[i], startInArr + 1)
        continue
      }
    } else {
      return false
    }
  }
  return true
}

console.log(wordPattern(pattern, s))
// 做过的最长时间的题目, 没有之一, fuck!😡
