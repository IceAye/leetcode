const minDominoRotations = function (tops, bottoms) {
    function check(target) {
        let topCount = 0;
        let bottomCount = 0;

        for (let i = 0; i < tops.length; i++) {
            if (tops[i] !== target && bottoms[i] !== target) {
                return -1;
            }
            if (tops[i] !== target) topCount++;
            else if (bottoms[i] !== target) bottomCount++;
        }
        return Math.min(topCount, bottomCount);
    }

    const result1 = check(tops[0]);
    const result2 = check(bottoms[0]);

    if (result1 === -1 && result2 === -1) return -1;
    if (result1 === -1) return result2;
    if (result2 === -1) return result1;

    return Math.min(result1, result2);
};

console.log(minDominoRotations([2,1,2,4,2,2], [5,2,6,2,3,2])) // 2
console.log(minDominoRotations([5,2,6,2,3,2], [2,1,2,4,2,2])) // 2
console.log(minDominoRotations([3,5,1,2,3], [3,6,3,3,4])) // -1
console.log(minDominoRotations([1,1,1,1], [1,1,1,1])) // 0
console.log(minDominoRotations([1,2,1,3,1,1,3,4], [3,2,2,1,4,1,4,2])) // -1