var trap = function(height) {
  const val = 0
  // 维护一个栈
  const arr =[0]
  for (const item of height) {
    if (item > arr[arr.length - 1]) {
      arr.push(item)
    }
  }
};
const res = trap([0,1,0,2,1,0,1,3,2,1,2,1])
console.log(res)