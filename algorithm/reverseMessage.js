// 
const reverseMessage = function (message) {
  message = ' ' + message
  let stack = []
  for (let i = message.length - 1; i >= 0; i--) {
    if (message[i] === ' ' && stack.length !== 0) {
      continue
    }
    stack.push(message[i])
  }
  let reverse = message.split(' ')
  return reverse.reverse().join(' ')
}

const message = "  the sky is blue  "
console.log(reverseMessage(message))