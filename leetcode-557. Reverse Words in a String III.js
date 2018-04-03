// https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    if (!s || s.length === 1) return s
    return s.split(' ').map(t => t.split('').reverse().join('')).join(' ')
};
reverseWords("Let's take LeetCode contest")