
// 没有人数限制的解法
const numRescueBoatsNoTwoPeopleLimit = function (people, limit) {
  people.sort((a, b) => a - b)
  let boats = 0
  let left = 0, right = people.length - 1
  let remaining = limit
  while (left <= right) {
    remaining -= people[right]
    while (remaining > 0) {
      remaining -= people[left]
      if (remaining < 0) {
        break
      } else {
        left++
      }
    }
    boats++
    right--
    remaining = limit
  }
  return boats
}
const people = [3, 5, 3, 4], limit = 5
// const people = [2, 49, 10, 7, 11, 41, 47, 2, 22, 6, 13, 12, 33, 18, 10, 26, 2, 6, 50, 10], limit = 50
// console.log(people.sort((a, b) => a - b))
// console.log(numRescueBoats(people, limit));
const numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b)
  let boats = 0
  let left = 0, right = people.length - 1
  let remaining = limit
  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++
    }
    right--
    boats++
    remaining = limit
  }
  return boats
}

console.log(numRescueBoats(people, limit));