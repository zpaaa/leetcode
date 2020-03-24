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

var addTwoNumbers = function(l1, l2) {
  let curr = l1
  const addRes = l1.val + l2.val
  curr.val = addRes >= 10 ? addRes -10 : addRes
  // 相当于后续节点
  if (!l1 || !l1.next) return curr
  curr.next = addTwoNumbers(l1.next, l2.next)
  return curr
};
const res = addTwoNumbers(LinkedListA.head, LinkedListB.head)
console.log(res)