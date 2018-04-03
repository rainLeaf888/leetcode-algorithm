// https://leetcode.com/problems/hamming-distance/description/
/**
 * 两者不相同的数, 利用^ 按位异或 ，只有 1 ^ 0 =1 原理,得到两个不同数字
 * 利用>> 向右移动运算符判断
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
   var value = x ^ y
   var count = 0;
   while (value != 0) {
       if (value & 1) count++
       value = value >> 1
   }
   return count
};
var param = [
    [1, 4]
]
console.log(hammingDistance.apply(null, param[0]))