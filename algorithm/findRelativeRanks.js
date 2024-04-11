// 

const findRelativeRanks = function (score) {
  let hashMap = new Map()
  for (let i = 0; i < score.length; i++) {
    hashMap.set(score[i], i)
  }
  console.log(hashMap)
  score.sort((a, b) => b - a)
  let result = []
  for (let i = 0; i < score.length; i++) {
    result[hashMap.get(score[i])] = `${i + 1}`
  }
  if (result.indexOf('1') !== -1) {
    result[result.indexOf('0')] = 'Gold Medal'
  }
  if (result.indexOf('2') !== -1) {
    result[result.indexOf('1')] = 'Silver Medal'
  }
  if (result.indexOf('3') !== -1) {
    result[result.indexOf('2')] = 'Bronze Medal'
  }
  return result
}


