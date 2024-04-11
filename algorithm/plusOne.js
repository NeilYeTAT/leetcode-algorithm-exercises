// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
// 你可以假设除了整数 0 之外，这个整数不会以零开头

// const digits = [1, 2, 4]
// const digits = [9, 9]
// const digits = [1, 2, 3, 2, 9, 9]
// const digits = [8, 9, 9, 9]
const plusOne = function (digits) {

  if (digits[digits.length - 1] === 9) {
    if (digits.length === 1) {
      return [1, 0]
    }
    digits[digits.length - 1] = 0
    // 循环遍历到第一个不是9的就行了
    for (let i = digits.length - 2; i >= 0; i--) {
      if (i === 0 && digits[i] === 9) {
        digits[i + 1] = 0
        digits[i] = 1
        digits.push(0)
        return digits
      }
      if (digits[i] !== 9) {
        digits[i] += 1
        return digits
      } 
      // < 9
      digits[i] = 0
    }
    digits.push(0)
    return digits
  }
  digits[digits.length - 1] += 1
  return digits
}
console.log(plusOne(digits))
// 马勒戈壁的, 这逻辑写的乱七八糟, 看不过来了😡