// 最慢最慢结果也会是scope
// 关键是如何判断速度是否达标?
// 向上取整数
const minEatingSpeed = function (piles, h) {
  let scope = Math.max(...piles)
  let left = 0, right = scope
  let ans = 0
  while (left <= right) {
    let speed = parseInt(left + ((right - left) >> 1))
    if (isOk(speed)) {
      ans = speed
      right = speed - 1
    } else {
      left = speed + 1
    }
  }
  function isOk(speed) {
    let time = 0
    for (let item of piles) {
      time += Math.ceil(item / speed)
    }
    if (time <= h) {
      return true
    } else {
      return false
    }
  }
  return ans
}
const piles = [3, 6, 7, 11], h = 8
console.log(minEatingSpeed(piles, h))