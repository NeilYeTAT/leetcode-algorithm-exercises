
const backspaceCompare = function(s, t) {

  const stack = []
  for (let item of s) {
    if (item === '#') {
      stack.pop()
    } else {
      stack.push(item)
    }
  }
  const stack2 = []
  for (let item of t) {
    if (item === '#') {
      stack2.pop()
    } else {
      stack2.push(item)
    }
  }
  if (stack.length !== stack2.length) {
    return false
  } else {
    for(let i  = 0; i < stack.length; i++) {
      if (stack[i] !== stack2[i]) {
        return false
      }
    }
  }
  return true
}