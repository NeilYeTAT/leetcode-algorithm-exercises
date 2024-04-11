// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

class ListNode {
  val
  constructor(val) {
    this.val = val
    this.next = null
  }
}
const mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  let head = list1.val <= list2.val ? list1 : list2
  let cur1 = list1
  let cur2 = list2
  let pre = head
  if (pre === cur1) {
    cur1 = cur1.next
  } else {
    cur2 = cur2.next
  }
  while (pre.next) {
    if (!cur1) {
      pre.next = cur2
      break
    }
    if (!cur2) {
      pre.next = cur1
      break
    }
    if (cur1.val < cur2.val) {
      pre.next = cur1
      pre = cur1
      cur1 = cur1.next
    } else {
      pre.next = cur2
      pre = cur2
      cur2 = cur2.next
    }
  }
  return head
}