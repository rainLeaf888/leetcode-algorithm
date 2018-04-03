// https://leetcode.com/problems/judge-route-circle/description/
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var x = 0;
    var y = 0;
    for(var i = 0; i < moves.length; i ++) {
        switch(moves[i]) {
            case 'L':
                x--
            break;
            case 'R':
                x++
            break;
            case 'U':
                y--
            break;
            case 'D':
                y++
            break
        }
    }
    return x == 0 && y == 0
};
console.log(judgeCircle('LL'))