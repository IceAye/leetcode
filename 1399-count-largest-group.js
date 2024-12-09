// ❓ DESCRIPTION:
// You are given an integer n.
// Each number from 1 to n is grouped according to the sum of its digits.
// Return the number of groups that have the largest size.
//
// ✅ SOLUTION:
const countLargestGroup = function (n) {
    let map = new Map();
    for (let i = 1; i <= n; i++) {
        let sum = Array.from(i.toString(), Number).reduce((acc, curr) => acc + curr, 0);
        map.set(sum, map.get(sum) + 1 || 1);
    }
    let array = [...map.values()];
    let max = Math.max(...array);
    return array.filter(item => item === max).length;
};

// 📌 TESTCASE:
console.log(countLargestGroup(13)) // 4
console.log(countLargestGroup(2)) // 2