// https://leetcode.com/problems/baseball-game/description/
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
   let sum = 0
   let arr = []

    for(let i = 0; i < ops.length; i++) {
        switch(ops[i]) {
           case 'C':
            arr.pop()
           break;
           case 'D':
            let result = arr[arr.length-1] * 2
            arr.push(result)
           break;
           case '+':
            let preVal = arr[arr.length-1]
            let preTwoVal = arr[arr.length -2]
            arr.push(preVal+preTwoVal)
           break;
           default:
            arr.push(parseInt(ops[i]));
           break
        }
    }
   arr.forEach(t => sum += t);
   return sum;
};
var param = [
    ["5","2","C","D","+"],
    ["5","-2","4","C","D","9","+","+"]
]
calPoints(param[1])