
// 供暖器位置 -1 为下标位置
const findRadius = function (houses, heaters) {
  houses.sort((a, b) => a - b)
  heaters.sort((a, b) => a - b)
  let ans = 0
  for (let i = 0, j = 0; i < houses.length; i++) {
    let now = Math.abs(houses[i] - heaters[j])
    while (j < heaters.length - 1 && Math.abs(houses[i] - heaters[j]) >= Math.abs(houses[i] - heaters[j + 1])) {
      j++
      now = Math.min(now, Math.abs(houses[i] - heaters[j]))
    }
    ans = Math.max(ans, now)
  }
  return ans
}


const houses = [1, 2, 3, 4], heaters = [1, 4]
// const houses = [1, 5], heaters = [2]
console.log(findRadius(houses, heaters));