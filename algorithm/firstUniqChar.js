// 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。
// 字符串只包含小写字母
// 怎么找到第一个呢...hash表中赋值给顺序, 然后排序
// 怎么找到第一个呢, 按照原数组索引呗(笑)
// hash hash hash 

// 反正不是统计次数, 无所谓啦
// const s = 'loveleetcode'
const s = "aadadaad"
// const s = 'aabb'
const firstUniqChar = function (s) {
  let hashMap = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i].charCodeAt() - 'a'.charCodeAt()] !== 0) {
      hashMap[s[i].charCodeAt() - 'a'.charCodeAt()] = null
      continue
    }
    hashMap[s[i].charCodeAt() - 'a'.charCodeAt()] += i + 1
  }
  let result = hashMap.filter(item => item > 0).sort((a, b) => a - b);
  console.log(result)
  if (result.length === 0) {
    return -1
  }
  return result[0] - 1
}

console.log(firstUniqChar(s))
// -------------------------马勒戈壁的, 调库高手, 还能这样, fuck
/** 第一次出现的索引和最后一次出现的索引相同, 就他妈的直接返回, 草
 *     for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i
        }
    }
 */