// 通俗一点说，每隔k个反转k个，末尾不够k个时全部反转

// 输入：s = "abcdefg", k = 2
// 输出："bacdfeg"
// 示例 2：
// 输入：s = "abcd", k = 2
// 输出："bacd"
/**
 * if 
 * 
 * reverse -> while(left < right) { }
 * 
 */

let s = 'hyzqyljrnigxvdtneasepfahmtyhlohwxmkqcdfehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqlimjkfnqcqnajmebeddqsgl'
let k = 39
const reverseStr = function (s, k) {
  let arr = [...s]
  if (arr.length <= k) {
    // arr.reverse()
    // console.log(arr.reverse().join(''))
    return arr.reverse().join('')
    console.log(arr)
  }
  let len = arr.length
  // i is start index 
  for (let i = 0; i < arr.length - 1; i = i + 2 * k) {
    let stopIndex = i + k - 1
    let left = i
    if (stopIndex >= arr.length - 1) {
      // 全部反转
      while (left < len) {
        [arr[left], arr[len]] = [arr[len], arr[left]]
        left++
        len--
      }
      return arr.join('')
    }
    while (left < stopIndex) {
      [arr[left], arr[stopIndex]] = [arr[stopIndex], arr[left]]
      left++
      stopIndex--
    }
  }
  return arr.join('')
}
console.log(reverseStr(s, k))
// 求求你不要折磨我了🥹