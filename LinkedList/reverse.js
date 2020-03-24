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

// 迭代反转
function reverseByIteration(head) {
  if (!head || !head.next) return head
  let curr = head
  let prev = null
  while(curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}

// const res = reverseByIteration(MylinkedList.head)

// 递归反转
function reverseByRecursion(head) {
  // 递归首先找好出口
  if (!head || !head.next) return head
  // 执行递归
  const next = head.next
  let newList = reverseByRecursion(next)
  // console.log('before-----------', newList)
  // 利用了对象的引用类型特性
  head.next = null
  next.next = head
  // console.log('after-----------', newList)
  return newList
}

const res = reverseByRecursion(MylinkedList.head)

console.log(res)
