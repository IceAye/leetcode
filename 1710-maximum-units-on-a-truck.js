let maximumUnits = function (boxTypes, truckSize) {
    let count = 0;
    let sortedBoxes = boxTypes.sort((a, b) => b[1] - a[1]);
    for (let [box, unit] of sortedBoxes) {
        while (box > 0 && truckSize > 0) {
            count += unit;
            truckSize--;
            box--;
        }
    }
    return count;
};

console.log(maximumUnits([[1,3],[2,2],[3,1]], 4));
console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10));
