// ❓ DESCRIPTION:
// The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:
// It has a length of k.
// It is a divisor of num.
// Given integers num and k, return the k-beauty of num.
//
// Note:
// Leading zeros are allowed.
// 0 is not a divisor of any value.
// A substring is a contiguous sequence of characters in a string.
//
// ✅ SOLUTION (100% runtime):
const divisorSubstrings = function(num, k) {
    let str = num.toString();
    let result = 0;

    for (let i = 0; i <= str.length - k; i++ ) {
        let potentialKBeauty = +str.slice(i, i + k);
        if (num % potentialKBeauty === 0) {
            result++;
        }
    }
    return result;
};

// 📌 TESTCASE:
console.log(divisorSubstrings(240, 2)) // 2
console.log(divisorSubstrings(430043, 2)) // 2
console.log(divisorSubstrings(30003, 3)) // 1
