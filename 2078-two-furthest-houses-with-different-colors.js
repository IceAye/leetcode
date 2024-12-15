// ❓ DESCRIPTION:
// There are n houses evenly lined up on the street, and each house is beautifully painted. You are given a 0-indexed integer array colors of length n, where colors[i] represents the color of the ith house.
// Return the maximum distance between two houses with different colors.
// The distance between the ith and jth houses is abs(i - j), where abs(x) is the absolute value of x.
//
// ✅ SOLUTION:
const maxDistance = function (colors) {
    let left = colors[0];
    let right = colors[colors.length - 1];
    let differColorLeft = 0;
    let differColorRight = 0;

    for (let i = 1; i < colors.length; i++) {
        if (left !== colors[i]) differColorLeft = i;
    }

    for (let i = 0; i < colors.length; i++) {
        if (right !== colors[i]) {
            differColorRight = i;
            break;
        }
    }
    return Math.max(differColorLeft, colors.length - 1 - differColorRight);
};

// 📌 TESTCASE:
console.log(maxDistance([1, 1, 1, 6, 1, 1, 1])); // 3
console.log(maxDistance([1, 8, 3, 8, 3])); // 4
console.log(maxDistance([0, 1])); // 1
console.log(maxDistance([4, 4, 4, 11, 4, 4, 11, 4, 4, 4, 4, 4])); // 8