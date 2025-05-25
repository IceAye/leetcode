// ❓ DESCRIPTION:
// You are given an array of strings words. Each element of words consists of two lowercase English letters.
// Create the longest possible palindrome by selecting some elements from words and concatenating them in any order. Each element can be selected at most once.
// Return the length of the longest palindrome that you can create. If it is impossible to create any palindrome, return 0.
// A palindrome is a string that reads the same forward and backward.
// (daily question 2025 May, 25th):
//
// ✅ SOLUTION:
const longestPalindrome = function(words) {
    const hash = new Map();
    let result = 0;
    let hasCentral = false;

    for (const word of words) {
        hash.set(word, (hash.get(word) || 0) + 1);
    }

    for (const [word, count] of hash) {
        if (word[0] === word[1]) {
            const pairs = Math.floor(count / 2);
            result += pairs * 4;

            if (count % 2 === 1) {
                hasCentral = true;
            }
        } else {
            const reversed = word[1] + word[0];
            if (hash.has(reversed)) {
                const min = Math.min(count, hash.get(reversed));
                result += min * 4;
                hash.set(word, 0);
                hash.set(reversed, 0);
            }
        }
    }

    if (hasCentral) {
        result += 2;
    }

    return result;
};

// 📌 TESTCASE:
console.log(longestPalindrome(["lc","cl","gg"])) // 6
console.log(longestPalindrome(["ab","ty","yt","lc","cl","ab"])) // 8
console.log(longestPalindrome(["cc","ll","xx"])) // 2
console.log(longestPalindrome(["dd","aa","bb","dd","aa","dd","bb","dd","aa","cc","bb","cc","dd","cc"])) // 22
