// 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
// 既然是重复的, 那么二分之一后也还是重复的吧😎
// 不是😭
// const s = 'aba bab'
// const repeateSubstringPatter = function (s) {
//   // 有始有终就行....
//   if (s.length % 2 !== 0) {
//     return false
//   }
//   let left = 0
//   let middle = s.length / 2
//   while (left < s.length / 2) {
//     if (s[left] === s[middle]) {
//       left++
//       middle++
//     } else {
//       return false
//     }
//   }
//   return true
// }
// console.log(repeateSubstringPatter(s))


const repeateSubstringPatter = function (s) {
  let ss = s + s;
  ss = ss.slice(1, ss.length - 1);
  return ss.includes(s);
}
const s = 'ababab'
console.log(repeateSubstringPatter(s))