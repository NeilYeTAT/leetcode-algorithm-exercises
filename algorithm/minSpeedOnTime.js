const minSpeedOnTime = function (dist, hour) {
  let ans = -1
  let left = 1,
    right = Math.max(...dist) * dist.length
  while (left <= right) {
    let speed = Math.floor((right - left) / 2 + left)
    if (isOk(speed)) {
      ans = speed
      right = speed - 1
    } else {
      left = speed + 1
    }
  }

  function isOk(speed) {
    let sum = 0
    for (let i = 0; i < dist.length; i++) {
      if (i === dist.length - 1) {
        sum += dist[i] / speed
      } else {
        sum += Math.ceil(dist[i] / speed)
      }
    }
    if (sum <= hour) {
      return true
    } else {
      return false
    }
  }

  return ans
}

console.log(Math.ceil(1 / 3))
console.log(2.0)
