// ❓ DESCRIPTION:
// You are given a 0-indexed 2D integer array nums representing the coordinates of the cars parking on a number line. For any index i, nums[i] = [starti, endi] where starti is the starting point of the ith car and endi is the ending point of the ith car.
//
// Return the number of integer points on the line that are covered with any part of a car.
//
// ✅ SOLUTION:
let numberOfPoints = function (nums) {
    nums.sort((a, b) => a[0] - b[0]);
    let mergedArray = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];
        let previous = mergedArray[mergedArray.length - 1];

        if (current[0] <= previous[1]) {
            previous[1] = Math.max(previous[1], current[1]);
        } else mergedArray.push(current);
    }

    let count = 0;
    for (const arr of mergedArray) {
        count += arr[1] - arr[0] + 1;
    }
    return count;
};

console.log(
    numberOfPoints([
        [3, 6],
        [1, 5],
        [4, 7],
    ]),
);
console.log(
    numberOfPoints([
        [1, 3],
        [5, 8],
    ]),
);
