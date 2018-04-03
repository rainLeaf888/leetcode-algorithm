// https://leetcode.com/problems/self-dividing-numbers/description/
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 判断一个整数，是否能整除所有组成自己的数字
 */
var selfDividingNumbers = function(left, right) {
  if (left < 1 || right > 10000) return []
  let result = []
  for (var i = left; i <= right; i++) {
    let str = i.toString()
    let ok = true;
    for (var j = 0; j < str.length; j++) {
        if (str[j] === '0' || i % str[j] !== 0){
            ok = false
            break;
        }
    }
    if(ok) result.push(i)
  }
  return result
};
selfDividingNumbers(1, 22)