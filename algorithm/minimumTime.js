
const minimumTime = function (time, totalTrips) {
  let countMin = Math.ceil(totalTrips / (Math.min(...time) * time.length))
  let countMax = Math.ceil(totalTrips * Math.max(...time))
  let result = countMax
  while (countMin <= countMax) {
    let count = Math.floor((countMax + countMin) / 2)
    if (isOk(count)) {
      result = count
      countMax = count - 1
    } else {
      countMin = count + 1
    }
  }
  return result
  // 目标是同 totalTrips 作对比
  function isOk(count) {
    let c = 0
    for (let item of time) {
      c += Math.floor(count / item)
    }
    if (c >= totalTrips) {
      return true
    } else {
      return false
    }
  }
}
const time = [2], totalTrips = 1
// const time = [1, 2, 3], totalTrips = 5
console.log(minimumTime(time, totalTrips))