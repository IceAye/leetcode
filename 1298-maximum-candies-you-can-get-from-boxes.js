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

console.log(maxCandies(  [1,0,1,0], [7,5,4,100],  [[],[],[1],[]], [[1,2],[3],[],[]], [0])) // 16
console.log(maxCandies( [1,0,0,0,0,0], [1,1,1,1,1,1], [[1,2,3,4,5],[],[],[],[],[]], [[1,2,3,4,5],[],[],[],[],[]], [0])) // 6