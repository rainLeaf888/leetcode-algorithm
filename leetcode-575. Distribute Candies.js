// https://leetcode.com/problems/distribute-candies/description/
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    var set = new Set()
    var uniques = 0
    var len = candies.length
    for (var i = 0; i < len; i++) {
        if (!set.has(candies[i])) {
            set.add(candies[i]);
            uniques++;
        }
    }
    return Math.min(uniques, len / 2);
};

var param = [
    [[1,1,2,2,3,3]],
    [[1,1,2,3]]
]
distributeCandies.apply(null, param[1])

var distributeCandies = function(candies) {
    var obj = {}
    var len = candies.length
    for (var i = 0; i < len; i++) {
        if (!obj[candies[i]]) {
            obj[candies[i]] = true
        }
    }
    var halfLen = len / 2
    var kindLen = Object.keys(obj).length
    return kindLen > halfLen ? halfLen : kindLen
}