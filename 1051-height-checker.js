// ❓ DESCRIPTION:
// A school is trying to take an annual photo of all the students.
// The students are asked to stand in a single file line in non-decreasing order by height.
// Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.
//
// You are given an integer array heights representing the current order that the students are standing in.
// Each heights[i] is the height of the ith student in line (0-indexed).
//
// Return the number of indices where heights[i] != expected[i].
//
// ✅ SOLUTION:
let heightChecker = function (heights) {
    let ordered = [...heights].sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (ordered[i] !== heights[i]) count++;
    }
    return count;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
console.log(heightChecker([5, 1, 2, 3, 4]));
console.log(heightChecker([1, 2, 3, 4, 5]));
console.log(heightChecker([10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]));