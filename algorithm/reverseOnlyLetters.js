// 给你一个字符串 s ，根据下述规则反转字符串：

// 所有非英文字母保留在原有位置。
// 所有英文字母（小写或大写）位置反转。
// 返回反转后的 s 。

const reverseOnlyLetters = function (s) {
  let arr = s.split('')
  let left = 0
  let right = arr.length - 1
  const hashMap = new Set(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  )
  while (left < right) {
    if (hashMap.has(arr[left]) && hashMap.has(arr[right])) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    } else if (hashMap.has(arr[left]) && !hashMap.has(arr[right])) {
      right--
      continue
    } else if (hashMap.has(arr[right]) && !hashMap.has(arr[left])) {
      left++
      continue
    } else {
      left++
      right--
    }
  }
  return arr.join('')
}

let s = 'a-bC-dEf-ghIj'
console.log(reverseOnlyLetters(s))