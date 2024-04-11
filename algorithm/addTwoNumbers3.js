function ListNode(val, next) {
  this.val = (val === undefined) ? 0 : val
  this.next = (next === undefined) ? null : next
}

// const addTwoNumbers = function (l1, l2) {
//   let stack1 = []
//   let stack2 = []
//   while (l1 || l2) {
//     if (l1) {
//       stack1.push(l1.val)
//       l1 = l1.next
//     }
//     if (l2) {
//       stack2.push(l2.val)
//       l2 = l2.next
//     }
//   }
//   let len = (stack1.length >= stack2.length) ? stack1.length : stack2.length
//   stack1.reverse()
//   stack2.reverse()
//   let carry = 0
//   let result = []
//   for (let i = 0; i < len; i++) {
//     stack1[i] = stack1[i] || 0
//     stack2[i] = stack2[i] || 0
//     if (stack1[i] + stack2[i] + carry >= 10) {
//       result.push(stack1[i] + stack2[i] + carry - 10)
//       carry = 1
//     } else {
//       result.push(stack1[i] + stack2[i] + carry)
//       carry = 0
//     }
//   }
//   if (carry) {
//     result.push(1)
//   }
//   let will = new ListNode(0, null)
//   let cur = will
//   for (let i = result.length - 1; i > 0; i--) {
//     cur.val = result[i]
//     cur.next = new ListNode(0, null)
//     cur = cur.next
//   }
//   cur.val = result[0]
//   return will
// }


const reverseList = function (head) {
  let pre = null
  let cur = head
  let temp
  while (cur) {
    temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp.next
  }
  return pre
}

const addTwoNumbersFake = function (l1, l2) {
  let add = 0
  let cur = new ListNode(0, null)
  let result = cur
  while (l1 || l2) {
    l1 = l1 || new ListNode(0, null)
    l2 = l2 || new ListNode(0, null)
    if (l1.val + l2.val + add >= 10) {
      cur.val = l1.val + l2.val + add - 10
      add = 1
    } else {
      cur.val = l1.val + l2.val + add
      add = 0
    }
    l1 = l1.next
    l2 = l2.next
    if (!l1 && !l2) {
      break
    }
    cur.next = new ListNode(0, null)
    cur = cur.next
  }
  if (add === 1) {
    cur.val = 1
  } else {
    cur = null
  }
  return result
};

const addTwoNumbers = function (l1, l2) {
  let firstRe = reverseList(l1)
  let secondRe = reverseList(l2)
  return addTwoNumbersFake(firstRe, secondRe)
}