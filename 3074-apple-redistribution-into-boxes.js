// ❓ DESCRIPTION:
// You are given an array apple of size n and an array capacity of size m.
// There are n packs where the ith pack contains apple[i] apples. There are m boxes as well, and the ith box has a capacity of capacity[i] apples.
// Return the minimum number of boxes you need to select to redistribute these n packs of apples into boxes.
// Note that, apples from the same pack can be distributed into different boxes.
//
// ✅ SOLUTION:
const minimumBoxes = function(apple, capacity) {
    let sum = apple.reduce((acc, curr) => acc + curr, 0);
    capacity.sort((a, b) => b - a);

    let count = 0;
    let i = 0;
    while (sum > 0) {
        count++;
        sum -= capacity[i];
        i++;
    }
    return count;
};

// 📌 TESTCASE:
console.log(minimumBoxes([1,3,2],  [4,3,1,5,2])) // 2
console.log(minimumBoxes([5,5,5],  [2,4,2,7])) // 4