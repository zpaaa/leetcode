// leetcode 2
// 定义节点
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 定义一个链表
function List(array) {
  let i = 0, temp = null
  while(i < array.length) {
    if (i === 0) {
      this.head = new ListNode(array[0])
      temp = this.head
    } else {
      temp.next = new ListNode(array[i])
      temp = temp.next
    }
    i++
  }
}
const arrayA = [1,2,3]
const arrayB =[4,5,6]
const LinkedListA = new List(arrayA)
const LinkedListB = new List(arrayB)
