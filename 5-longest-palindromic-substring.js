/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
    let length = 0;
    let result = '';

    function checkPalindrome(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > length) {
                result = s.slice(left, right + 1);
                length = right - left + 1;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        checkPalindrome(i, i);
        checkPalindrome(i, i + 1);
    }
    return result
};

console.log(longestPalindrome("babad")) // bab
console.log(longestPalindrome("cbbd")) // bb
console.log(longestPalindrome("a")) // bb
console.log(longestPalindrome("ac")) // bb