
const finalString = function(s) {
  const res = []
  for (let item of s) {
    if (item === 'i') {
      res.reverse()
    } else {
      res.push(item)
    }
  }
  return res.join()
}