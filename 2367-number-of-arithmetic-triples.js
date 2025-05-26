const arithmeticTriplets = function(nums, diff) {
    let count = 0;
    const set = new Set(nums);

    for (const num of set) {
        if (set.has(num + diff) && set.has(num + diff *2)) count++;
    }

    return count;
};

console.log(arithmeticTriplets([0,1,4,6,7,10],  3)) // 2
console.log(arithmeticTriplets([4,5,6,7,8,9],  2)) // 2