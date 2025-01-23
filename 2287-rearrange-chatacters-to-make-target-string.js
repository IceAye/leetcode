// ❓ DESCRIPTION:
// You are given two 0-indexed strings s and target. You can take some letters from s and rearrange them to form new strings.
// Return the maximum number of copies of target that can be formed by taking letters from s and rearranging them.
//
// ✅ SOLUTION (100% runtime):
const rearrangeCharacters = function(s, target) {
    let count = 0;

    let isInclude = true;

    while (isInclude) {
        for (const char of target) {
            if (s.match(new RegExp(`${char}`))) {
                s = s.replace(new RegExp(`${char}`) , "");
            } else {
                return count;
            }
        }
        count++
    }
};

// 📌 TESTCASE:
console.log(rearrangeCharacters("ilovecodingonleetcode", "code")) // 2
console.log(rearrangeCharacters("abcba", "abc")) // 1
console.log(rearrangeCharacters("abbaccaddaeea", "aaaaa")) // 1