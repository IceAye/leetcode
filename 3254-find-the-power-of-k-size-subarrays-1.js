function resultsArray(nums, k) {
    if (k === 1) return nums;

    const result = [];

    let arrays = [];
    for (let i = 0; i <= nums.length - k; i++) {
        arrays.push(nums.slice(i, k + i));
    }

    for (const array of arrays) {
        let count = 0;
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] + 1 === array[j + 1]) {
                count = array[j + 1];
            } else {
                count = -1;
                break;
            }
        }
        result.push(count);
    }
    return result;
}

console.log(resultsArray([1,2,3,4,3,2,5], 3)) // [3,4,-1,-1,-1]
console.log(resultsArray([2,2,2,2,2], 4)) // [-1,-1]
console.log(resultsArray([3,2,3,2,3,2], 2)) //  [-1,3,-1,3,-1]
console.log(resultsArray([1], 1)) //  [1]