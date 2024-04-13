
const isSymmetric = function (root) {
  if (root === null) {
    return true;
  }
  let queue = [];
  queue.push(root.left);
  queue.push(root.right);
  while (queue.length) {
    let leftNode = queue.shift();    //左节点
    let rightNode = queue.shift();   //右节点
    if (leftNode === null && rightNode === null) {
      continue;
    }
    if (leftNode === null || rightNode === null || leftNode.val !== rightNode.val) {
      return false;
    }
    queue.push(leftNode.left);     //左节点左孩子入队
    queue.push(rightNode.right);   //右节点右孩子入队
    queue.push(leftNode.right);    //左节点右孩子入队
    queue.push(rightNode.left);    //右节点左孩子入队
  }
  return true;
}