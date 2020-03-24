// 链表判断是否有环

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


const array = [1,2,3,4]

const MylinkedList = new List(array)

function hasCycle(head) {
  let fast = head
  let slow = head
  while(fast && slow && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow == fast) {
      console.log('相遇啦')
      return true
    }
  }
  console.log('没有环')
  return false
}
hasCycle(MylinkedList.head)