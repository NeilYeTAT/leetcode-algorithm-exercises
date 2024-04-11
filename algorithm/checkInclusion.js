// 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。
// 换句话说，s1 的排列之一是 s2 的 子串 。

const checkInclusion = function (s1, s2) {
  let hashMap = new Map()
  for (let item of s1) {
    if (hashMap.has(item)) {
      hashMap.set(item, hashMap.get(item) + 1)
    } else {
      hashMap.set(item, 1)
    }
  }
  let fakeMap = new Map(hashMap)
  let len = s1.length
  let key = 1
  let temp = null
  for (let i = 0; i < s2.length; i++) {
    if (fakeMap.has(s2[i]) && fakeMap.get(s2[i]) === 1) {
      if (key) {
        temp = i
        key = 0
      }
      fakeMap.delete(`${s2[i]}`)
      len--
      if (len === 0) {
        return true
      }
    } else if (fakeMap.has(s2[i]) && fakeMap.get(s2[i]) > 1) {
      if (key) {
        temp = i
        key = 0
      }
      fakeMap.set(s2[i], fakeMap.get(s2[i]) - 1)
      len--
      if (len === 0) {
        return true
      }
    } else {
      if (key === 0) {
        i = temp
        key = 1
      }
      fakeMap = new Map(hashMap)
      len = s1.length
    }
    return false
  }
}

// ========== 慢的飞起...............2000ms

