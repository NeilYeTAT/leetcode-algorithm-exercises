const dividePlayers = function (skill) {
  skill.sort((a, b) => a - b)
  if (skill.length === 2) {
    return skill[0] * skill[1]
  }

  let left = 0,
    right = skill.length - 1, sum = 0
  let radix = skill[left] + skill[right]
  sum += skill[left] * skill[right]
  left ++
  right--
  while (left < right) {
    if (skill[left] * skill[right] !== radix) {
      return -1
    } else {
      sum += skill[left] + skill[right]
      left++
      right--
    }
  } 
  return sum
}
