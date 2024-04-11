// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。

const head = [1, 2, 6, 3, 4, 5, 6], val = 6
class ListNode {
  constructor(val, next) {
    this.val = val
    this.next = next
  }
}

const removeElements = function (head, val) {
  let fakeHead = new ListNode(null, head)
  let cur = fakeHead
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return fakeHead.next
}

// var removeElements = function (head, val) {
//   const ret = new ListNode(0, head);
//   let cur = ret;
//   while (cur.next) {
//     if (cur.next.val === val) {
//       cur.next = cur.next.next;
//       continue;
//     }
//     cur = cur.next;
//   }
//   return ret.next;
// };
// console.log(removeElements(head, val))