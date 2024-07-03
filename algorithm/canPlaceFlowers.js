/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  flowerbed.push(0)
  flowerbed.unshift(0)
  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i + 1] === 0 &&
      flowerbed[i - 1] === 0
    ) {
      n--
    }
  }
  return n <= 0
}
