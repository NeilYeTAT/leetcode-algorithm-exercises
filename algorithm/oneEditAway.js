

const oneEditAway = function (first, second) {
  if (Math.abs(first.length - second.length) > 1) {
    return false
  }

  if (first.length === second.length) {
    let key = 1
    for (let i = 0; i < second.length; i++) {
      if (key && first[i] !== second[i]) {
        key = 0
        continue
      }
      if (first[i] !== second[i]) {
        return false
      }
    }
  } else {
    let [max, min] = (first.length > second.length) ? [first, second] : [second, first]
    let key = 1
    for (let i = 0; i < max.length; i++) {
      if (key && max[i] !== min[i]) {
        key = 0
        continue
      }
      if (key === 0 && max[i] !== min[i - 1]) {
        return false
      }
    }
  }
  return true
}
const first = "intention"
const second = "execution"
console.log(oneEditAway(first, second))