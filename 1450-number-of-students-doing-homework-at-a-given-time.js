// ❓ DESCRIPTION:
// Given two integer arrays startTime and endTime and given an integer queryTime.
//
// The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].
//
// Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.
//
// ✅ SOLUTION:
let busyStudent = function (startTime, endTime, queryTime) {
    let count = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (startTime[i] <= queryTime && endTime[i] >= queryTime) count++;
    }
    return count;
};

console.log(busyStudent([1, 2, 3], (endTime = [3, 2, 7]), (queryTime = 4)));
console.log(busyStudent([4], (endTime = [4]), (queryTime = 4)));
