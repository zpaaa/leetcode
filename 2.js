/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
var addTwoNumbers = function(l1, l2) {
  // const numA = l1.reduce((prev, curr, index, arr) => {
  //   return prev + Math.pow(10, arr.length  - index - 1) * curr
  // }, 0)
  // const numB = l2.reduce((prev, curr, index, arr) => {
  //   return prev + Math.pow(10, arr.length  - index - 1) * curr
  // }, 0)
  let numA = 0, numB = 0

  for (let i=0; i<l1.length;i++) { 
    numA += Math.pow(10, l1.length - i - 1) * l1[i]
  }

  for (let i=0; i<l2.length;i++) { 
    numB += Math.pow(10, l2.length - i - 1) * l2[i]
  }

  console.log((numA + numB + '').split('').reverse())
  return((numA + numB + '').split('').reverse())
};

const l1 = [2,4,3], l2 = [5,6,4]

addTwoNumbers(l1, l2)