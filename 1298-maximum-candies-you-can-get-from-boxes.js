// ❓ DESCRIPTION:
// You have n boxes labeled from 0 to n - 1. You are given four arrays: status, candies, keys, and containedBoxes where:
//
// status[i] is 1 if the ith box is open and 0 if the ith box is closed,
// candies[i] is the number of candies in the ith box,
// keys[i] is a list of the labels of the boxes you can open after opening the ith box.
// containedBoxes[i] is a list of the boxes you found inside the ith box.
// You are given an integer array initialBoxes that contains the labels of the boxes you initially have. You can take all the candies in any open box and you can use the keys in it to open new boxes and you also can use the boxes you find in it.
//
// Return the maximum number of candies you can get following the rules above.
// 📅 (daily question 2025, June, 3rd)
//
// ✅ SOLUTION:
const maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
    let totalCandies = 0;
    const ownedBoxes = new Set(initialBoxes);
    const availableKeys = new Set();
    const queue = [];
    const processed = new Set();

    for (const box of initialBoxes) {
        if (status[box] === 1 || availableKeys.has(box)) {
            queue.push(box);
            processed.add(box);
        }
    }

    while (queue.length > 0) {
        const box = queue.shift();

        totalCandies += candies[box];

        for (const key of keys[box]) {
            availableKeys.add(key);
            if (ownedBoxes.has(key) && !processed.has(key)) {
                queue.push(key);
                processed.add(key);
            }
        }

        for (const newBox of containedBoxes[box]) {
            ownedBoxes.add(newBox);
            if ((status[newBox] === 1 || availableKeys.has(newBox)) && !processed.has(newBox)) {
                queue.push(newBox);
                processed.add(newBox);
            }
        }
    }

    return totalCandies;
};

// 📌 TESTCASE:
console.log(maxCandies(  [1,0,1,0], [7,5,4,100],  [[],[],[1],[]], [[1,2],[3],[],[]], [0])) // 16
console.log(maxCandies( [1,0,0,0,0,0], [1,1,1,1,1,1], [[1,2,3,4,5],[],[],[],[],[]], [[1,2,3,4,5],[],[],[],[],[]], [0])) // 6