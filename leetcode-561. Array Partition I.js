// https://leetcode.com/problems/array-partition-i/description/
/**
 * @param {number[]} nums
 * @return {number}
 给定一个长度为2n(偶数)的数组，分成n个小组，返回每组中较小值的和sum，使sum尽量大
 */
var arrayPairSum = function(nums) {
    nums = nums.sort(function (a, b) {
        return a - b
    });
    let result = 0;
    for(let i = 0; i < nums.length; i+=2) {
        result += Math.min(nums[i], nums[i+1])
    }
    return result;
};
console.log(arrayPairSum([1,4,3,2]))