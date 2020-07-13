// 无重复字符的最长子串
var lengthOfLongestSubstring = function(s) {
  let res = []
  const splitRes = s.split('')
  for (let i = 0; i < s.length; i++) {
    if ( i > 0) { splitRes.splice(0, 1) }
    // 找出无重复的最长字符串
    const a = []
    for (const item of splitRes) {
      if (a.indexOf(item) < 0) {a.push(item)}
      else break
    }
    if (a.length >= res.length) res = a
  }
  console.log(res)
  return res.length
};




const s = "wsslpluuwekuaxt"



lengthOfLongestSubstring(s)