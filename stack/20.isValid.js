/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let valSatck = []
  const arr = s.split('')
  const singleParts = ['(', '[', '{']
  const rightAnswers = ['()', '[]', '{}']
  for (const item  of arr) {
    if (singleParts.indexOf(item) >= 0) {
      // 左括号压栈
      valSatck.push(item)
    } else if (rightAnswers.indexOf(valSatck.pop() + item) < 0) {
      return false
    }
  }
  if(valSatck.length > 0) return false
  return true
};
isValid('{')