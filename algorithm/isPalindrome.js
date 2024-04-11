// ....这题好像做过啊, 双指针秒了...

// let s = "a.";
let s = "0p"
// console.log(cleanStr); // 输出 "HelloWorldThisisatest"
// let regex = /^[a-zA-Z]+$/;


const isPalindrome = function (s) {
  // let str = s.replace(/[\s,:;!.@#$%^&*()]/g, '');
  // let str = s.replace(/[\s,:;!.@#$%^&*()]/g, '').replace(/[^a-zA-Z]/g, '');
  // let str = s.replace(/[^a-zA-Z]/g, '');
  let str = s.replace(/[^a-zA-Z0-9]/g, '');
  let cleanStr = str.toLowerCase()
  if (cleanStr.length === 1) {
    return true
  }
  let right = cleanStr.length - 1
  let left = 0
  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false
    }
    left++
    right--
  }
  return true
}
// isPalindrome(s)
console.log(isPalindrome(s))