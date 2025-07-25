/**
 * @param {number[]} nums
 * @return {number}
 */

// SOLUTION 1 (80% runtime, 24% memory):
const maxSum = function(nums) {
    const maxNumber = Math.max(...nums);

    if (maxNumber <= 0) return maxNumber;

    let sum = 0;
    let positivesUnique = new Set();

    for (const num of nums) {
        if (num > 0 && !positivesUnique.has(num)) {
            positivesUnique.add(num);
            sum += num;
        }
    }

    return sum;
};

// SOLUTION 2 (100% runtime, 18% memory):
const maxSum = function(nums) {
    const maxNumber = Math.max(...nums);

    if (maxNumber <= 0) return maxNumber;

    let unique = new Set(nums);

    return [...unique].reduce((acc, curr) => acc + (curr > 0 ? curr : 0), 0);
};

console.log(maxSum([1,2,3,4,5])) // 15
console.log(maxSum([1,1,0,1,1])) // 1
console.log(maxSum([1,2,-1,-2,1,0,-1])) // 3