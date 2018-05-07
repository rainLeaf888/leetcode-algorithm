// https://leetcode.com/problems/next-greater-element-i/description/
/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 findNums 是nums的子集，找出findNums中的元素在nums出现位置之后的数组中，
 第一个大于该值的元素
 */
var nextGreaterElement = function(findNums, nums) {
    let result = []
    findNums.forEach(n => {
      let len = 0;
      let rightArr = nums.slice(nums.indexOf(n)+1, nums.length)

      for(let i = 0; i < rightArr.length; i++) {
          if (rightArr[i] > n) {
              result.push(rightArr[i])
              break;
          }
          len++
      }
      if (rightArr.length === 0|| len === rightArr.length) result.push(-1)
    })
    return result;
};

// 方法二
var nextGreaterElement = function(findNums, nums) {
    return findNums.map(n => {
        let len = nums.length
        let pos = nums.indexOf(n)
        while(pos++ < len) {
            if (nums[pos] > n) return nums[pos] 
        }
        return -1
    })
};

var params = [[[4,1,2], [1,3,4,2]], [[2,4], [1,2,3,4]], [[1,3,5,2,4], [5,4,3,2,1]]]

nextGreaterElement.apply(null, params[2])