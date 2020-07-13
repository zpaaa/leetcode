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
const arrayA = [8,9,9]
const arrayB =[2]
const LinkedListA = new List(arrayA)
const LinkedListB = new List(arrayB)

var addTwoNumbers = function(l1, l2) {
  // console.log('l1--------------', l1)
  // console.log('l2--------------', l2)
  if (l1 && l1.val >=10) {
    l1.val -= 10
    l1.next ? l1.next.val++ : l1.next = new ListNode(1)
  }

  if (l2 && l2.val >= 10) {
    l2.val -= 10
    l2.next ? l2.next.val++ : l2.next = new ListNode(1)  
  }

  // 这时l1、l2 必定都存在
  let curr
  if (!l1.next && l2.next) curr = l2
  else if (!l2.next && l1.next) curr = l1
  else curr = l1
  const addRes = l1.val + l2.val
  curr.val = addRes >= 10 ? addRes - 10 : addRes
  // 进位
  if (addRes >= 10) {
    if (!l1.next && l2.next) {
      l2.next.val++
    } else if (!l2.next && l1.next) {
      l1.next.val++
    } else {
      l1.next ? l1.next.val++ : l1.next = new ListNode(1)
    }
  }

  if (!l1.next && !l2.next) return curr
  curr.next = addTwoNumbers(l1.next || new ListNode(0), l2.next || new ListNode(0))
  return curr
};

const res = addTwoNumbers(LinkedListA.head, LinkedListB.head)
console.log(res)
