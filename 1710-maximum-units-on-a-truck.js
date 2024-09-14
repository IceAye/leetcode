// ❓ DESCRIPTION:
// You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:
//
// numberOfBoxes is the number of boxes of type i.
// numberOfUnitsPerBox is the number of units in each box of the type i.
// You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.
//
// Return the maximum total number of units that can be put on the truck.
//
// ✅ SOLUTION:
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
