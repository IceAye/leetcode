/**
 * @param {string} s
 * @return {boolean}
 */
const doesAliceWin = function(s) {
    const vowels = s.match(/[aeiou]/gi);
    return !!vowels;
};

console.log(doesAliceWin("leetcoder")) // true
console.log(doesAliceWin("bbcd")) // false