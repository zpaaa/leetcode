// leetcode 21 合并链表
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


const array = [1]

const linkedListA = new List([5])
const linkedListB = new List([1,2,4])
var mergeTwoLists = function(l1, l2) {
  if(!l1) return l2
  if(!l2) return l1

  if(l1.val < l2.val){
      l1.next = mergeTwoLists(l1.next ,l2)
      return l1
  }else{
      l2.next = mergeTwoLists(l1 ,l2.next)
      return l2
  }
}

const res = mergeTwoLists(linkedListA.head, linkedListB.head)
console.log(res)
