// leetcode 25 
// k个一组翻转链表
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

function reverseKGroup(head, k) {
  if (!head || !head.next || k === 1) return head
  let next = head
  // 1,2,3,4,5,6,7...,k 找到第k个节点
  for (let i=0;i<k-1;i++) {
    if(!next || !next.next) {
      return head
    } else {
      next = next.next
    }
  }
 
  // 满足k个将 head个给reverse
  // 找到第k+1个节点继续递归 理解为后续节点
  let newList = reverseKGroup(next.next, k)
  // head.next = newList
  for (let i=0;i<k;i++) {
    const nextNode = head.next
    head.next = newList
    newList = head
    head = nextNode
  }
  return newList
}

const res = reverseKGroup(MylinkedList.head, 2)
console.log(res)
