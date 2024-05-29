var wateringPlants = function (plants, capacity) {
  let ans = 0
  let remain = capacity
  for (let i = 0; i < plants.length; i++) {
    if (remain - plants[i] >= 0) {
      ans++
    } else {
      remain = capacity
      ans += 2 * i + 1
    }
    remain -= plants[i]
  }
  return ans
}

// const plants = [2, 2, 3, 3],
//   capacity = 5
const plants = [3, 2, 4, 2, 1],
  capacity = 6
console.log(wateringPlants(plants, capacity))
