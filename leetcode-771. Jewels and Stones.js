// https://leetcode.com/problems/jewels-and-stones/description/
/**
 * @param {string} J 宝石的类型
 * @param {string} S 你所拥有的石头
 * @return {number} 求你有多少宝石
 */
var numJewelsInStones = function(J, S) {
  var count = 0;
  for(var i = 0; i < S.length; i++) {
    if (J.indexOf(S[i]) > -1) count++
   }
  return count; 
};
var param = [
    ['aA', 'aAAbbbb'],
    ['z', 'ZZ']
  ]
console.log(numJewelsInStones.apply(null, param[0]))