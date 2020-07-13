// leetcode 19
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

const MylinkedList = new List(array)
// m从后开始统计元素个数,如果如果等于n,即到达倒数第n个,
// 将当前下一节点指向返回个当前上一节点连接,否则返回当前节点连接
var removeNthFromEnd = function(head, n) {
  if(!head) return head
  if (!head.next && n===1) {
    head = null
    return head
  }
  let isCurr = false
  let curr = head
  // 找当前节点的后n 个节点
  // 判断能不能找到
  // 如果能找到直接记录
  for (let i = 0;i < n; i++) {
    if (curr.next) {
      curr = curr.next
    } else {
      isCurr = true
    }
  }
  if (isCurr) {
    return head.next
  } else {
    let newList = removeNthFromEnd(head.next, n)
    // console.log('newList', newList)
    // console.log('head', head)
    head.next = newList
    return head
  }
};

const res = removeNthFromEnd(MylinkedList.head, 1)
console.log(res)
