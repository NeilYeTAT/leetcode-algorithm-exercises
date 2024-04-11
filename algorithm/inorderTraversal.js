// 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。

// 左, 中, 右

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const inorderTraversal = function (root) {
  let result = []
  function gcd(root) {
    if (root === null) {
      return
    }
    gcd(root.left)
    result.push(root.val)
    gcd(root.right)
  }
  gcd(root)
  return result
}