// ❓ DESCRIPTION:
// There are n mountains in a row, and each mountain has a height. You are given an integer array height where height[i] represents the height of mountain i, and an integer threshold.
//
// A mountain is called stable if the mountain just before it (if it exists) has a height strictly greater than threshold. Note that mountain 0 is not stable.
//
// Return an array containing the indices of all stable mountains in any order.
//
// ✅ SOLUTION (100% runtime, 93.70% memory):
const stableMountains = function(height, threshold) {
    let result = [];
    for (let i = 1; i < height.length; i++) {
        if (height[i - 1] > threshold) result.push(i);
    }
    return result;
};

// 📌 TESTCASE:
console.log(stableMountains([1,2,3,4,5], 2)) // [3,4]
console.log(stableMountains([10,1,10,1,10], 3)) // [1,3]
console.log(stableMountains([10,1,10,1,10], 10)) // []
