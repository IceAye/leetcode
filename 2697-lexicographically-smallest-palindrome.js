/**
 * @param {string} s
 * @return {string}
 */
const makeSmallestPalindrome = function(s) {
    const middle = Math.floor(s.length / 2);
    const array = [...s];

    if (s.length % 2 === 1) {
        for (let i = 0; i < middle; i++) {
            let prevChar = array[middle - 1 - i];
            let nextChar = array[middle + 1 + i];
            if ( prevChar === nextChar ) continue;
            if (prevChar > nextChar) array[middle - 1 - i] = nextChar;
            if (nextChar > prevChar) array[middle + 1 + i] = prevChar
        }
    }  else {
        for (let i = 0; i < middle; i++) {
            let prevChar = array[middle - 1 - i];
            let nextChar = array[middle + i];
            if ( prevChar === nextChar ) continue;
            if (prevChar > nextChar) array[middle - 1 - i] = nextChar;
            if (nextChar > prevChar) array[middle + i] = prevChar
        }
    }
    return array.join('');
};

console.log(makeSmallestPalindrome("egcfe")) // "efcfe"
console.log(makeSmallestPalindrome("abcd")) // "abba"
console.log(makeSmallestPalindrome("seven")) // "neven"