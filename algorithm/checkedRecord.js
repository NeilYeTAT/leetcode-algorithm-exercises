/**
 * 给你一个字符串 s 表示一个学生的出勤记录，其中的每个字符用来标记当天的出勤情况（缺勤、迟到、到场）。记录中只含下面三种字符：
'A'：Absent，缺勤
'L'：Late，迟到
'P'：Present，到场
如果学生能够 同时 满足下面两个条件，则可以获得出勤奖励：
按 总出勤 计，学生缺勤（'A'）严格 少于两天。
学生 不会 存在 连续 3 天或 连续 3 天以上的迟到（'L'）记录。
如果学生可以获得出勤奖励，返回 true ；否则，返回 false 。
 */

// A P L 升序排序, 笑死我了, 直接获取第一次出现的下标索引, 妈的, 这次老子要超神辣🥵
const s = 'PPALLP'
console.log(s.includes("LLL"))

console.log(s.split('').sort().includes('L'))

const checkedRecord = function (s) {
  const noSort = s.split('')
  const arr = s.split('').sort()
  if (arr.lastIndexOf('A') - arr.indexOf('A') >= 1) {
    return false
  }
  let indexOfL = noSort.indexOf('L')
  if (indexOfL === -1 || noSort.lastIndexOf('L') - indexOfL < 2) {
    return true
  }
  if (s.includes('LLL')) {
    return false
  }
  return true
  // console.log(indexOfL)
  // for (indexOfL; indexOfL < noSort.length; indexOfL++) {
  //   if (noSort[indexOfL] === 'L') {
  //     count++
  //     if (count === 3) {
  //       return false
  //     }
  //     continue
  //   }
  //   count = 0
  // }
}
// checkedRecord(s)
// console.log(checkedRecord(s))
// ---------------------------------------你就像个🤡, 妈的, 可以直接找字符串的啊, 草
// class Solution {
// public boolean checkRecord(String s) {
// return (s.indexOf('A')==s.lastIndexOf('A')) && (!s.contains("LLL"));
//  }
// }