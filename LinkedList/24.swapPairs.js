// 链表交换相邻元素

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


const array = [1,2,3,4,5]

const MylinkedList = new List(array)
// console.log(MylinkedList.head)

// 交换相邻的元素
function swapByRecursion(head) {
  // 找到出口
  if(!head || !head.next) return head 
  // 第二个节点
  let next = head.next
  let followNode = swapByRecursion(next.next)
  head.next =followNode
  next.next = head
  return next
}

const res = swapByRecursion(MylinkedList.head)
console.log(res)