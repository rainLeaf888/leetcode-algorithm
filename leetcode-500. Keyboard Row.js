// https://leetcode.com/problems/keyboard-row/description/
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let rows = 'qwertyuiop,asdfghjkl,zxcvbnm'.split(',')
    return (words || []).filter(n => {
        let t = n.toLowerCase()
        return rows.find(n => {
            var ok = true
            for(let i = 0; i < t.length; i++) {
                if (n.indexOf(t[i]) < 0) {
                    ok = false
                    break;
                }
            }
            return ok
        })
    })
};

findWords(["Hello", "Alaska", "Dad", "Peace"])