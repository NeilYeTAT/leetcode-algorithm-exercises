
const WordsFrequency = function (book) {
  this.hashMap = new Map()
  for (let item of WordsFrequency) {
    hashMap.set(item, (hashMap.get(item) || 0) + 1)
  }
}

WordsFrequency.prototype.get = function (word) {
  return this.get(word) || 0
}