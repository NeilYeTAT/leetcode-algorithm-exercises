var reverseMessage = function (message) {
  let arr = message.split(' ')
  return arr.reverse().filter(n => n !== '').join(' ')
}
const message = "the sky is blue"

console.log(reverseMessage(message))