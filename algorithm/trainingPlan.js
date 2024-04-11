// 1, 2, 3, 4, 5

// const trainingPlan = function (actions) {
//   let left = 0, right = actions.length - 1
//   while (left < right) {
//     if (actions[left] % 2 === 0 && actions[right] % 2 !== 0){
//       [actions[left], actions[right]] = [actions[right], actions[left]]
//       left++
//       right--
//     }
//     if (actions[left] % 2 !== 0) {
//       left++
//     }
//     if (actions[right] % 2 === 0) {
//       right--
//     }
//   }
//   return actions
// }

// const trainingPlan = function (head, cnt) {
//   let cur = head
//   let count = 0
//   while (cur) {
//     count++
//     cur = cur.next
//   }
//   let index = count - cnt
//   cur = head
//   for (let i = 0; i < index; i++) {
//     cur = cur.next
//   }
//   return cur
// }

// const trainingPlan = function (head) {
//   let stack = []
//   let cur = head
//   while (cur) {
//     stack.push(cur.val)
//     cur = cur.next
//   }
//   if (stack.length === 0) {
//     return head
//   }
//   let result = new ListNode(0, null)
//   cur = result
//   for (let i = stack.length - 1; i > 0; i--) {
//     cur.val = stack[i]
//     if (i) {
//       cur.next = new ListNode(0, null)
//       cur = cur.next
//     }
//   }
//   return result
//   // let pre = null
//   // let cur = head
//   // let temp
//   // while (cur) {
//   //   temp = cur.next
//   //   cur.next = pre
//   //   pre = cur
//   //   cur = temp
//   // }
//   // return pre
// }

// const trainingPlan = function (l1, l2) {
//   if (!l1 && !l2) {
//     return l1
//   }
//   if (!l1 && l2) {
//     return l2
//   }
//   if (!l2 && l1) {
//     return l1
//   }

//   let head = (l1.val <= l2.val) ? l1 : l2
//   let cur = head
//   while (l1 || l2) {
//     if (!l1) {
//       cur.val = l2.val
//       l2 = l2.next
//       if (!l1 && !l2) {
//         break
//       }
//       cur.next = new ListNode(0, null)
//       cur = cur.next
//       continue
//     }

//     if (!l2) {
//       cur.val = l1.val
//       l1 = l1.next
//       if (!l1 && !l2) {
//         break
//       }
//       cur.next = new ListNode(0, null)
//       cur = cur.next
//       continue
//     }

//     if (l1?.val <= l2?.val) {
//       cur.val = l1.val
//       l1 = l1.next
//     } else {
//       cur.val = l2.val
//       l2 = l2.next
//     }
//     if (!l1 && !l2) {
//       break
//     }
//     cur.next = new ListNode(0, null)
//     cur = cur.next
//   }
//   return head
// }

var getIntersectionNode = function (headA, headB) {
  let curA = headA, curB = headB;
  while (curA !== curB) {
    curA = curA ? curA.next : headB;
    curB = curB ? curB.next : headA;
    // 如果两个指针同时指向 null，表示两个链表没有相交点
    if (!curA && !curB) {
      return null;
    }
  }
  return curA; // 返回相交节点或者 null
};
