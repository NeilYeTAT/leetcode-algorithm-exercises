// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
// 如果可以，返回 true ；否则返回 false 。
// magazine 中的每个字符只能在 ransomNote 中使用一次。

// 前者是否能由后者构成?
// 哈希表中数值大于0就行了
const canConstruct = function (ransomNote, magazine) {
  let hashMap = new Array(26).fill(0)

  for (let i = 0; i < magazine.length; i++) {
    hashMap[magazine[i].charCodeAt() - 'a'.charCodeAt()]++
  }
  for(let j = 0; j < ransomNote.length; j++) {
    if(hashMap[ransomNote[j].charCodeAt() - 'a'.charCodeAt()] < 0) {
      return false
    }
    hashMap[ransomNote[j].charCodeAt() - 'a'.charCodeAt()]--
  }
  return hashMap.every(ele => ele >= 0)
}
const ransomNote = 'aa'
const magazine = 'aab'
console.log(canConstruct(ransomNote, magazine))
