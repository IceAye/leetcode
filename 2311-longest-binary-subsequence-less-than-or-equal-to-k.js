const longestSubsequence = function(s, k) {
    while (parseInt(s, 2) > k) {
        s = s.replace(/1/, '');
    }
    return s.length;
};

console.log(longestSubsequence("1001010",  5)) // 5
console.log(longestSubsequence("00101001",  1)) // 6