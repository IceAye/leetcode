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

console.log(findContentChildren([1, 2, 3], [1, 1])); // 1
console.log(findContentChildren([1, 2], [1, 2, 3])); // 2
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8])); // 2