// https://leetcode.com/problems/rotate-string/description/
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 将A字符串中的最左侧元素移动到最右侧，判断是否变成b
 */
var rotateString = function(A, B) {
  if (!A && !B) return true
  if (!A || !B) return false
  for (var i = 1; i <= A.length; i++) {
    let first = A.substring(0,i)
    let newStr = A.substring(i, A.length)+first
    if (B === newStr) {
        return true
    }
  }
  return false
};
var param = [
['abcde', 'cdeab'],
['abcde', 'abced'],
['', ''],
['', 'a']
]
rotateString.apply(null, param[3])