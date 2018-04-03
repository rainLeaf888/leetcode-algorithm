// https://leetcode.com/problems/number-complement/description/
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  // 取当前数据的二进制值  Number.toString(2)
  var newResult = num.toString(2)
  var result = ''
  // 将二进制每位取相反值
  for (var i = 0; i < newResult.length; i++) {
    result += newResult[i] === '1' ? '0' : '1'
  }
  // 将二进制转化为十进制
  return parseInt(result, 2)
};
console.log(findComplement(1))