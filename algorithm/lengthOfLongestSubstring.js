// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
// 滑动窗口记录长度
// 双指针遍历
// 集和保存值
// 快慢指针法!!!

// const lengthOfLongestSubstring = function (s) {
//   let length = 0
//   let hashMap = new Map()
//   let radix = 0
//   for (let fast = 0; fast < s.length; fast++) {
//     if (hashMap.has(s[fast])) {
//       length = length > hashMap.size ? length : hashMap.size
//       radix = hashMap.get(s[fast]) + 1
//       // hashMap.delete(s[fast])
//       fast = radix - 1
//       hashMap.clear()
//       continue
//     }
//     hashMap.set(s[fast], fast)
//   }
//   return length > hashMap.size ? length : hashMap.size
// }

// let s = 'pwwkew'
// console.log(lengthOfLongestSubstring(s))

// // 200ms, 慢的跟猪一样
// 3. 25 , 爹来更新代码了, 滑动窗口, 速度快的飞起来要
// 91ms, 优化的相当不错

const lengthOfLongestSubstring = function (s) {
  let hashMap = new Map()
  let result = 1
  let i = 0
  while (i < s.length) {
    if (!hashMap.has(s[i])) {
      hashMap.set(s[i], i)
      i++
    } else {
      result = Math.max(result, hashMap.size)
      for (let [key, value] of hashMap.entries()) {
        if (key !== s[i]) {
          hashMap.delete(key)
          continue
        } else {
          hashMap.delete(key)
          break
        }
      }
      hashMap.set(s[i], i)
      i = hashMap.get(s[i]) + 1
    }
  }
  return (result > hashMap.size) ? result : hashMap.size
}

const FAKElengthOfLongestSubstring = function (s) {
  let hashMap = new Map()
  let result = 0
  // i 为不重复子串的起始位置, j 为遍历位置
  let i = 0
  for (let j = 0; j < s.length; j++) {
    if (hashMap.has(s[j])) {
      i = Math.max(hashMap.get(s[j]) + 1, i)
    }
    hashMap.set(s[j], j)
    result = Math.max(result, j - i + 1)
  }
  return result
}
