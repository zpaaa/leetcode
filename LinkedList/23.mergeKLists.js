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
const linkedListB = new List([3,2,4])
const linkedListC = new List([1,2,4,6])
// 思路和原来两个一样
// 获取小的那个，将剩余继续比较
var mergeKLists = function(arr) {
  // 出口条件应该为所有的都为null,就应该return
  arr = arr.filter(v => {
    return v && (v.val || v.val === 0)
  })
  if (arr.length === 0) return null
  // 找到arr里val 最小的一个 
  // const miniData = arr.reduce((prev, curr, index) => {
  //   if (curr.val < prev.value.val){
  //     prev.value = curr
  //     prev.index = index
  //   }
  //   return prev
  // },{
  //  value: arr[0],
  //  index: 0 
  // })
  let miniData = {
    value: arr[0],
    index: 0
  }
  for (let i = 1; i<arr.length; i++) {
    if (arr[i].val < miniData.value.val) {
      miniData = {
        value: arr[i],
        index: i
      }
    }
  }
  arr[miniData.index] = miniData.value.next
  miniData.value.next = mergeKLists(arr)
  arr = null
  return miniData.value
}

const res = mergeKLists([linkedListA.head, linkedListB.head, linkedListC.head])
console.log(res)
