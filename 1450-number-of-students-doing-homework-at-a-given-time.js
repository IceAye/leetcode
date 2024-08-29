let busyStudent = function (startTime, endTime, queryTime) {
    let count = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (startTime[i] <= queryTime && endTime[i] >= queryTime) count++;
    }
    return count;
};

console.log(busyStudent([1, 2, 3], (endTime = [3, 2, 7]), (queryTime = 4)));
console.log(busyStudent([4], (endTime = [4]), (queryTime = 4)));
