// ❓ DESCRIPTION:
// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at
// most one cookie.  Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be
// content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the
// child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

// ❗ CONSTRAINTS:
// 1 <= g.length <= 3 * 10^4
// 0 <= s.length <= 3 * 104^
// 1 <= g[i], s[j] <= 2^31 - 1

// ✅ SOLUTION:
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function (g, s) {
    let greedSorted = g.sort((a, b) => a - b);
    let cookiesSorted = s.sort((a, b) => a - b);

    let result = 0;

    let kid = 0;
    for (let cookie = 0; cookie < cookiesSorted.length; cookie++) {
        if (cookiesSorted[cookie] >= greedSorted[kid]) {
            result++;
            kid++;
        }
    }

    return result;
};

// 📌 TESTCASE:
console.log(findContentChildren([1, 2, 3], [1, 1])); // 1
console.log(findContentChildren([1, 2], [1, 2, 3])); // 2
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8])); // 2