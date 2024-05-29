const arrangeWords = function (text) {
  text = text.split(" ")
  text[0] = text[0].toLowerCase()
  text.sort((a, b) => a.length - b.length)
  let temp = text.shift()
  temp = temp.split("")
  let mid = temp[0].toUpperCase()
  temp.shift()
  temp = mid + temp.join('') + ' '
  return temp + text.join(' ')
}

// const text = "Leetcode is cool"
const text = 'o'
// const text = "to be or not to be"
console.log(arrangeWords(text))
