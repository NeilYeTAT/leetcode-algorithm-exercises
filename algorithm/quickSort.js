// 从数组中随机选取一个值作为基准，把所有小于基准的数移动到基准左边，所有大于基准的数移动到基准右边
// 双指针分别指左和右
// 左指针碰到大于基准的停止移动
// 右指针碰到小于基准的停止移动
// 1. 如果左右指针没有越界
//    + 交换左右指针的值, 继续分别遍历左右
// 2. 如果左右指针越界了
//    + 交换左指针和基准的值