

const statisticalResult = function (arrayA) {
  if (arrayA.length === 0) {
    return []
  }
  const result = new Array(arrayA.length)
  let noZero = 1
  let product = 1
  let key = 0
  if (arrayA.includes(0)) {
    for (let i = 0; i < arrayA.length; i++) {
      if (arrayA[i] === 0) {
        product = 0
        key++
        continue
      }
      noZero *= arrayA[i]
    }
  } else {
    product = arrayA.reduce((acc, cur) => acc * cur)
  }
  if (key > 1) {
    return result.fill(0)
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] === 0) {
      result[i] = noZero
      continue
    }
    result[i] = product / arrayA[i]
  }
  return result
}

const arrayA = [1, 2, 0, 4, 5]
console.log(statisticalResult(arrayA))
