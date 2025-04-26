const lengthOfLongestSubstring = function(s) {
    let result = 0;
    let mapIndicis = new Map();
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (mapIndicis.has(char) && mapIndicis.get(char) >= start) {
            start = mapIndicis.get(char) + 1;
        }
        mapIndicis.set(char, i);
        result = Math.max(result, i - start + 1);
    }
    return result;
};

console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3
console.log(lengthOfLongestSubstring("au")) // 2
console.log(lengthOfLongestSubstring("dvdf")) // 3
console.log(lengthOfLongestSubstring("tmmzuxt")) // 5