// ❓ DESCRIPTION:
// A string s can be partitioned into groups of size k using the following procedure:
// The first group consists of the first k characters of the string, the second group consists of the next k characters of the string, and so on. Each character can be a part of exactly one group.
// For the last group, if the string does not have k characters remaining, a character fill is used to complete the group.
// Note that the partition is done so that after removing the fill character from the last group (if it exists) and concatenating all the groups in order, the resultant string should be s.
// Given the string s, the size of each group k and the character fill, return a string array denoting the composition of every group s has been divided into, using the above procedure.
// 📅 (daily question 2025 June, 22nd)
//
// ✅ SOLUTION (runtime 100%):
const divideString = function (s, k, fill) {
    let result = [];
    for (let i = 0; i < s.length; i += k) {
        result.push(s.slice(i, i + k));
    }
    while (result.at(-1).length < k) {
        result[result.length - 1] += fill;
    }
    return result;
};

// ✅ SOLUTION in Python3:
class Solution:
    def divideString(self, s: str, k: int, fill: str) -> List[str]:
        result = []
        for i in range(0, len(s), k):
            result.append(s[i : i + k])
        while len(result[-1]) < k:
            result[-1] = result[-1] + fill * (k - len(result[-1]))
        return result

// 📌 TESTCASE:
console.log(divideString("abcdefghi", 3, "x")); // ["abc","def","ghi"]
console.log(divideString("abcdefghij", 3, "x")); // ["abc","def","ghi","jxx"]
